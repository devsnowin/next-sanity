import Link from 'next/link';

interface LinkProps extends React.ComponentPropsWithRef<'a'> {
  variant?: '';
}

export default function A({ variant, href = '/', ...prop }: LinkProps) {
  return <Link href={href} />;
}
