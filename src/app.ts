import express from 'express';
import path from 'path';
import { menu } from './data/menu';

const app = express();
const PORT = process.env.PORT || 3000;

interface Order { id: number; text: string; status: string; time: string; }
const orders: Order[] = [];
let nextId = 1;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/menu', (_req, res) => res.json(menu));

app.post('/api/orders', (req, res) => {
  const order: Order = { id: nextId++, text: req.body.text, status: 'NUEVO', time: new Date().toLocaleTimeString('es-UY') };
  orders.unshift(order);
  res.json(order);
});

app.get('/api/orders', (_req, res) => res.json(orders));

app.patch('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === +req.params.id);
  if (order) order.status = req.body.status;
  res.json(order);
});

app.listen(PORT, () => console.log(`🍕 Gusta Pizzas en http://localhost:${PORT}`));