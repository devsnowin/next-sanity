import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { Product } from '@/types';
import { getProducts } from '@/sanity/utils';
import Category from '@/components/category';
import { useRouter } from 'next/router';

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

export default function Store({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { query } = useRouter();

  return (
    <main>
      {query.category ? (
        <Category products={products} category={query.category as string} />
      ) : (
        <>
          <Category products={products} category="jackets" />
          <Category products={products} category="shoes" />
          <Category products={products} category="shirts" />
        </>
      )}
    </main>
  );
}
