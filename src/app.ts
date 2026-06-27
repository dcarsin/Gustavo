import express from 'express';
import path from 'path';
import { menu } from './data/menu';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/menu', (_req, res) => {
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`🍕 Gusta Pizzas corriendo en http://localhost:${PORT}`);
});