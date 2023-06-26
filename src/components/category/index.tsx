import type { Product } from '@/types';
import { Button } from '../ui/button';
import { addItemToCart } from '@/store/cart';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle2 } from 'lucide-react';

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
              <div
                key={product._id}
                className="group relative overflow-hidden rounded-[10px]"
              >
                <img
                  className="w-60 h-60 object-cover "
                  src={product.image}
                  alt={product.alt}
                />
                <div className="absolute inset-0 bg-primary/50 w-full p-4 flex flex-col justify-end gap-2 overlay-bg">
                  <div className="text-white overlay-content">
                    <h2 className="font-bold">{product.name}</h2>
                    <h2>₹{product.price}</h2>
                  </div>
                  <Button
                    variant="outline"
                    className="transition-transform ease-linear duration-300 translate-y-[200%] group-hover:translate-y-0 hover:bg-secondary hover:border-2 border-secondary"
                    onClick={() => {
                      addItemToCart(product);
                      toast({
                        // @ts-ignore
                        title: (
                          <span className="flex items-center gap-2">
                            <CheckCircle2
                              strokeWidth={2.5}
                              className="text-secondary"
                              size={22}
                            />{' '}
                            Item added to cart
                          </span>
                        ) as React.ReactNode,
                      });
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
