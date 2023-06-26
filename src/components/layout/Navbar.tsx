import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="h-20 flex items-center justify-between">
      <Link href="/" className="font-bold text-2xl">
        Ns .
      </Link>
      <nav className="flex item-center gap-4">
        <Link href="/store">Shop</Link>
        <Link href="/">Cart</Link>
      </nav>
    </header>
  );
}
