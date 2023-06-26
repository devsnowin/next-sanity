import Link from 'next/link';
import { useStore } from '@nanostores/react';
import { $cart as cart, removeItemFromCart, subtotal } from '@/store/cart';
import type { CartItem as CartItemType } from '@/types';
import CartItem from '@/components/cart-item';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const $cart = useStore(cart);
  const $subtotal = useStore(subtotal);

  if (!$cart || Object.values($cart).length === 0) {
    return (
      <div className="h-full grid place-items-center">
        <div className="text-center space-y-4">
          <h2 className="title">Your cart is empty !</h2>
          <Button>
            <Link href="/store">Add some items</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="divide-y-2 divide-primary">
      <h1 className="title mb-4">Order summary</h1>
      <div className="w-full mb-4 flex flex-col divide-dashed divide-y-2 divide-primary gap-5">
        {/* @ts-ignore */}
        {Object.values($cart).map((item: CartItemType) => (
          <CartItem key={item._id} cartItem={item} />
        ))}
      </div>
      <div className="space-y-2 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Subtotal</h3>
          <p>₹{$subtotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Shipping</h3>
          <span className="space-x-2">
            <del>$10.00</del>
            <ins>FREE</ins>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Total</h3>
          <p>₹{$subtotal}</p>
        </div>
      </div>
    </main>
  );
}
