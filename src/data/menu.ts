import { Category } from '../types';

export const menu: Category[] = [
  {
    name: 'Calzones',
    note: '+ Faina de regalo',
    items: [
      { id: 'cal-carne', name: 'Carne', description: 'Muzzarella, carne, cebolla y morrón', price: 350 },
      { id: 'cal-pollo', name: 'Pollo', description: 'Muzzarella, pollo y champiñones', price: 350 },
      { id: 'cal-verdura', name: 'Verdura', description: 'Muzzarella, puerro, cebolla y morrón', price: 350 },
      { id: 'cal-capresse', name: 'Capresse', description: 'Muzzarella, tomate y albahaca', price: 350 },
      { id: 'cal-jamon', name: 'Jamón y Queso', description: 'Muzzarella, jamón y orégano', price: 350 },
      { id: 'cal-4quesos', name: 'Cuatro Quesos', description: 'Muzzarella, dambo, provolone y roquefort', price: 350 },
      { id: 'cal-calabrese', name: 'Calabrese', description: 'Muzzarella, tomate, jamón, longaniza y aceitunas', price: 350 }
    ]
  },
  {
    name: 'Pizzetas Gourmet 32 cm',
    note: '+ Faina de regalo',
    items: [
      { id: 'gourmet-4quesos', name: 'Cuatro Quesos', description: 'Muzzarella, dambo, provolone y roquefort', price: 400 },
      { id: 'gourmet-melanzani', name: 'Melanzani', description: 'Muzzarella, berenjena y parmesano', price: 400 },
      { id: 'gourmet-vegetal', name: 'Vegetal', description: 'Muzzarella, tomate, cebolla y morrón', price: 400 },
      { id: 'gourmet-catalana', name: 'Catalana', description: 'Jamón serrano, rúcula y parmesano', price: 400 },
      { id: 'gourmet-anchoas', name: 'Pizza con Anchoas', description: 'Muzzarella y anchoas', price: 400 }
    ]
  },
  {
    name: 'Pizzetas 32 cm',
    note: '+ Faina de regalo · Sabores extras $50 c/u',
    items: [
      { id: 'piz-pizzeta', name: 'Pizzeta', description: 'Solo salsa', price: 150 },
      { id: 'piz-cowboy', name: 'Cowboy', description: 'Muzzarella, panceta y huevo', price: 350 },
      { id: 'piz-margarita', name: 'Margarita', description: 'Muzzarella, albahaca y orégano', price: 350 },
      { id: 'piz-prosciutto', name: 'Prosciutto', description: 'Muzzarella y jamón', price: 350 },
      { id: 'piz-salami', name: 'Salami', description: 'Muzzarella, salami y aceitunas', price: 350 },
      { id: 'piz-peperoni', name: 'Peperoni', description: 'Muzzarella y peperoni', price: 350 },
      { id: 'piz-capresse', name: 'Capresse', description: 'Muzzarella, tomate y albahaca', price: 350 },
      { id: 'piz-caribena', name: 'Caribeña', description: 'Muzzarella, jamón y ananá', price: 350 },
      { id: 'piz-fugazza', name: 'Fugazza', description: 'Cebolla, morrón, aceitunas y orégano', price: 250 }
    ]
  },
  {
    name: 'Metro de Pizza',
    items: [
      { id: 'metro-muzza', name: '1 Metro con Muzza + 4 Faina', price: 700 },
      { id: 'medio-muzza', name: '1/2 Metro con Muzza + 2 Faina', price: 400 },
      { id: 'medio-comun', name: '1/2 Metro Común + 2 Faina', price: 300 }
    ]
  },
  {
    name: 'Especiales',
    items: [
      { id: 'pizzeta-rellena', name: 'Pizzeta Rellena 32 cm', description: 'Jamón, aceituna, morrón y huevo', price: 600 },
      { id: 'calzone-2', name: 'Calzone para 2 + 2 Faina', price: 600 }
    ]
  },
  {
    name: 'Faina',
    items: [
      { id: 'faina', name: 'Porción de Faina', price: 80 },
      { id: 'faina-queso', name: 'Porción de Faina de Queso', price: 100 }
    ]
  }
];