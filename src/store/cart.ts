import type { CartItem, Product } from '@/types';
import { computed, map } from 'nanostores';

export const $cart = map<Record<string, CartItem>>({});

export function addItemToCart(item: Product) {
  const cartItem = $cart.get()[item._id];
  const quantity = cartItem ? cartItem.quantity : 0;

  $cart.setKey(item._id, {
    ...item,
    quantity: quantity + 1,
  });
}

export function decreaseQuantity(item: Product) {
  const cartItem = $cart.get()[item._id];
  const quantity = cartItem ? cartItem.quantity : 0;

  if (quantity > 1) {
    $cart.setKey(item._id, {
      ...item,
      quantity: quantity - 1,
    });
  } else {
    // @ts-ignore
    $cart.setKey(item._id, undefined);
  }
}

export function removeItemFromCart(itemId: string) {
  // @ts-ignore
  $cart.setKey(itemId, undefined);
}

export const subtotal = computed($cart, (entries) => {
  let subtotal = 0;
  Object.values(entries).forEach((entry) => {
    if (!entry) return;
    subtotal += entry.quantity * entry.price;
  });

  return subtotal;
});
