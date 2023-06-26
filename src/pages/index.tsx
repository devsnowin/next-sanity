/* eslint-disable @next/next/no-img-element */
import { InferGetStaticPropsType, type GetStaticProps } from 'next';
import { Product } from '@/types';
import { getProducts } from '@/sanity/utils';
import { Button } from '@/components/ui/button';
import LandingImg from '@/assets/images/landing-image.jpg';
import Image from 'next/image';

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
          <Button className="w-fit">Shop now</Button>
        </div>
      </div>
      <section className="mt-10">
        <h1 className="title">Featured products</h1>
        <div className="my-4 grid grid-cols-2  gap-4">
          {products.map((product) => {
            if (product.category === 'jackets') {
              return (
                <div
                  key={product._id}
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
                </div>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}
