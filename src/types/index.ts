export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
}

export interface Category {
  name: string;
  note?: string;
  items: Product[];
}