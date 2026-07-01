const WHATSAPP_NUMBER = '59892927733';
let menu = [];
let ubicacion = '';
const cart = {};

async function loadMenu() {
  const res = await fetch('/api/menu');
  menu = await res.json();
  renderMenu();
}

function renderMenu() {
  const container = document.getElementById('menu');
  container.innerHTML = '';

  menu.forEach(category => {
    const title = document.createElement('div');
    title.className = 'category-title';
    title.innerHTML = `${category.name}${category.note ? ` <span class="category-note">${category.note}</span>` : ''}`;
    container.appendChild(title);

    if (category.image) {
      const img = document.createElement('img');
      img.className = 'category-image';
      img.src = category.image;
      img.alt = category.name;
      container.appendChild(img);
    }

    const card = document.createElement('div');
    card.className = 'card';

    category.items.forEach(p => {
      const row = document.createElement('div');
      row.className = 'product';
      row.innerHTML = `
        <div class="product-info">
          <h3>${p.name}</h3>
          ${p.description ? `<p>${p.description}</p>` : ''}
        </div>
        <div style="display:flex;align-items:center">
          <span class="product-price">$${p.price}</span>
          <div class="qty-controls">
            <button onclick="changeQty('${p.id}', -1)">−</button>
            <span id="qty-${p.id}">0</span>
            <button onclick="changeQty('${p.id}', 1)">+</button>
          </div>
        </div>
      `;
      card.appendChild(row);
    });

    container.appendChild(card);
  });
}

function findProduct(id) {
  for (const cat of menu) {
    const found = cat.items.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function changeQty(id, delta) {
  const product = findProduct(id);
  if (!cart[id]) cart[id] = { product, qty: 0 };
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];

  document.getElementById(`qty-${id}`).textContent = cart[id] ? cart[id].qty : 0;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  Object.values(cart).forEach(({ product, qty }) => {
    total += product.price * qty;
  });
  document.getElementById('cart-total').textContent = `Total: $${total}`;
}

function buildSummary() {
  let total = 0;
  const lines = ['*NUEVO PEDIDO - Gusta Pizzas*', ''];

  // Recorremos cada categoría en orden y mostramos solo lo que se pidió
  menu.forEach(category => {
    const itemsPedidos = category.items.filter(p => cart[p.id]);

    if (itemsPedidos.length > 0) {
      lines.push(`*${category.name}*`);
      itemsPedidos.forEach(p => {
        const qty = cart[p.id].qty;
        lines.push(`  ${qty}x ${p.name} - $${p.price * qty}`);
        total += p.price * qty;
      });
      lines.push('');
    }
  });

  lines.push(`*Total: $${total}*`);
  lines.push('');

  const delivery = document.querySelector('[name="delivery"]:checked').value;
  const payment = document.querySelector('[name="payment"]:checked').value;
  const customer = document.getElementById('customer').value.trim();
  const address = document.getElementById('address').value.trim();
  const reference = document.getElementById('reference').value.trim();

  if (customer) lines.push(`Cliente: ${customer}`);
  lines.push(`Entrega: ${delivery}`);
  if (delivery === 'Delivery') {
    if (address) lines.push(`Dirección: ${address}`);
    if (reference) lines.push(`Referencia: ${reference}`);
    if (ubicacion) lines.push(`Ubicación: ${ubicacion}`);
  }
  lines.push(`Pago: ${payment}`);

  return lines.join('\n');
}

document.getElementById('send-btn').addEventListener('click', async () => {
  if (Object.keys(cart).length === 0) {
    alert('Agregá al menos un producto a tu pedido.');
    return;
  }

  const delivery = document.querySelector('[name="delivery"]:checked').value;
  if (delivery === 'Delivery') {
    if (!document.getElementById('address').value.trim()) {
      alert('Por favor ingresá tu dirección para el delivery.');
      return;
    }
    if (!ubicacion) {
      alert('Por favor tocá "📍 Compartir mi ubicación" antes de enviar.');
      return;
    }
  }
const summary = buildSummary();
  await fetch('/api/orders', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: summary })
  });
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;
  window.open(url, '_blank');
});

document.getElementById('location-btn').addEventListener('click', () => {
  const status = document.getElementById('location-status');
  if (!navigator.geolocation) {
    status.textContent = 'Tu teléfono no soporta ubicación.';
    return;
  }
  status.textContent = 'Obteniendo ubicación...';
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      ubicacion = `https://maps.google.com/?q=${latitude},${longitude}`;
      status.textContent = '✅ Ubicación lista';
    },
    () => { status.textContent = '❌ No se pudo obtener (activá el GPS)'; }
  );
});


function togglePaymentInfo() {
  const payment = document.querySelector('[name="payment"]:checked').value;
  document.getElementById('transfer-info').style.display =
    payment === 'Transferencia' ? 'block' : 'none';
}

document.querySelectorAll('[name="payment"]').forEach(radio => {
  radio.addEventListener('change', togglePaymentInfo);
});
togglePaymentInfo();

document.getElementById('copy-btn').addEventListener('click', () => {
  navigator.clipboard.writeText('3701673445');
  document.getElementById('copy-btn').textContent = '✅ ¡Copiado!';
  setTimeout(() => {
    document.getElementById('copy-btn').textContent = '📋 Copiar número de cuenta';
  }, 2000);
});

loadMenu();