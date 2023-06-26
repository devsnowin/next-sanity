import { Product } from '@/types';
import FeaturedCard from './featured-card';

interface FeaturedCardsPros {
  products: Product[];
}

export default function FeaturedCards({ products }: FeaturedCardsPros) {
  return (
    <section className="mt-10">
      <h1 className="title">Featured products</h1>
      <div className="my-4 grid grid-cols-2  gap-4">
        {products.map((product) => {
          if (product.category === 'jackets') {
            return <FeaturedCard product={product} key={product._id} />;
          }
        })}
      </div>
    </section>
  );
}
