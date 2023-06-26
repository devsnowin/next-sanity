import { InferGetStaticPropsType, type GetStaticProps } from 'next';
import { Product } from '@/types';
import { getProducts } from '@/sanity/utils';
import { Button } from '@/components/ui/button';
import FeaturedCards from '@/components/featured-cards';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(products);

  return (
    <main>
      <div
        className={`relative bg-[url('/images/landing-image.jpg')] w-full h-[40vh] bg-center bg-no-repeat bg-cover text-center rounded-[10px] overflow-hidden`}
      >
        <div className="w-full h-full bg-primary/20 px-1 flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold text-2xl text-white">
            Level up your styles with our awesome collections
          </h1>
          <p></p>
          <Button asChild className="w-fit" variant="secondary">
            <Link href="/store">Shop now</Link>
          </Button>
        </div>
      </div>
      <FeaturedCards products={products} />
    </main>
  );
}
