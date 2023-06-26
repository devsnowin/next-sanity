import type { CartItem } from '@/types';
import {
  addItemToCart,
  decreaseQuantity,
  removeItemFromCart,
} from '@/store/cart';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';
import { toast } from './ui/use-toast';

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  return (
    <div className="pt-5 flex justify-between">
      <div className="flex items-start gap-4">
        <img
          src={cartItem.image}
          alt={cartItem.alt}
          className="w-32 h-32 object-cover rounded-[10px]"
        />
        <div>
          <h3 className="font-bold">{cartItem.name}</h3>
          <span className="text-primary/60">{cartItem.category}</span>
          <p>₹{cartItem.price * cartItem.quantity}</p>
        </div>
      </div>
      <div className="max-h-full flex flex-col justify-between items-end">
        <Button
          className="w-fit"
          variant="destructive"
          onClick={() => {
            removeItemFromCart(cartItem._id);
            toast({
              // @ts-ignore
              title: (
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    strokeWidth={2.5}
                    className="text-secondary h-5 w-5"
                  />
                  Item remove successfully
                </span>
              ) as React.ReactNode,
            });
          }}
        >
          Remove
        </Button>
        <div className="space-x-2">
          <Button onClick={() => decreaseQuantity(cartItem)}>-</Button>
          <span>{cartItem.quantity}</span>
          <Button onClick={() => addItemToCart(cartItem)}>+</Button>
        </div>
      </div>
    </div>
  );
}
