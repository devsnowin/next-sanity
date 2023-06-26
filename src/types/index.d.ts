export type Product = {
  _id: string;
  _createdAt: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  category: 'jackets' | 'shirt' | 'shoes';
  price: number;
};

export interface CartItem extends Product {
  quantity: number;
}

export type CartType = {
  cartItems: CartItem;
  totalCost: number;
};
