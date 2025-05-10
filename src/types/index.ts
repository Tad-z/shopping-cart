export interface Product {
  _id: string;
  productImage: string;
  title: string;
  price: number;
  color: string;
  slug: string;
  createdAt: string;
}

export interface CartItem {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  quantity: number;
}
