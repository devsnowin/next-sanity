/* eslint-disable @next/next/no-img-element */
import type { Product } from '@/types';
import Link from 'next/link';

interface FeaturedCard {
  product: Product;
}

export default function FeaturedCard({ product }: FeaturedCard) {
  return (
    <Link
      href={`/store?category=${product.category}`}
      className="w-full max-w-[15rem] overflow-hidden flex gap-2 bg-white rounded-[10px]"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-[10px]"
      />
      <div className="pt-2">
        <h3 className="font-bold text-sm">{product.name}</h3>
        <span>₹{product.price}</span>
      </div>
    </Link>
  );
}
