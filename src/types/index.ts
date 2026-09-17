export interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  image: string;
  category: string;
  is_new: boolean;
  is_popular: boolean;
  is_out_of_stock: boolean;
  inventory: number;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export interface CartLine {
  product: Product;
  qty: number;
}

export interface DeliveryZone {
  label: string;
  fee: number;
}
