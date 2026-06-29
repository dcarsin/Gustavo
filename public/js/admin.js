async function load() {
  const orders = await (await fetch('/api/orders')).json();
  document.getElementById('orders').innerHTML = orders.map(o => `
    <div class="order ${o.status}">
      <div class="badge">${o.status}</div>
      <small>#${o.id} · ${o.time}</small>
      <pre>${o.text}</pre>
      <button onclick="imprimir(${o.id})">🖨️ Imprimir</button>
      <button onclick="set(${o.id},'ENVIADO')">✅ Enviado</button>
    </div>`).join('') || '<p>Sin pedidos</p>';
}
async function set(id, status) { await fetch('/api/orders/'+id, {method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})}); load(); }
async function imprimir(id) {
  const o = (await (await fetch('/api/orders')).json()).find(x=>x.id===id);
  const w = window.open('','','width=300'); w.document.write(`<pre>${o.text}</pre>`); w.print(); w.close();
  set(id,'EN PROCESO');
}
load(); setInterval(load, 5000);