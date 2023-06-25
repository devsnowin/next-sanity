/* eslint-disable @next/next/no-img-element */
import { InferGetStaticPropsType, type GetStaticProps } from 'next';
import { Product } from '@/types';
import { getProducts } from '@/sanity/utils';

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
      <h1>products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.alt} className="w-40" />
        </div>
      ))}
    </main>
  );
}
