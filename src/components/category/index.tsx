import type { Product } from '@/types';

interface CategoryProps {
  category: 'jackets' | 'shoes' | 'shirts' | (string & {});
  products: Product[];
}

export default function Category({ products, category }: CategoryProps) {
  return (
    <div className="space-y-4 my-4">
      <h1 className="title capitalize">{category}</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => {
          if (product.category === category) {
            return (
              <img
                key={product._id}
                className="w-60 h-60 object-cover rounded-[10px]"
                src={product.image}
                alt={product.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
