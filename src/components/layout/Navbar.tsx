import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@nanostores/react';
import { $cart as cart } from '@/store/cart';

export default function Navbar() {
  const $cart = useStore(cart);

  return (
    <header className="h-20 flex items-center justify-between">
      <Link href="/" className="font-bold text-2xl">
        Ns .
      </Link>
      <nav className="flex item-center gap-4">
        <Link href="/store">Shop</Link>
        <Link href="/store/cart" className="relative">
          <Badge
            className="absolute -top-2 -right-2 w-5 h-5 flex item-center justify-center"
            variant="secondary"
          >
            {Object.values($cart).length}
          </Badge>
          <ShoppingBag size={24} />
        </Link>
      </nav>
    </header>
  );
}
