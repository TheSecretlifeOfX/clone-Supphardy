import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { formatNaira } from '@/lib/format';
import { ProductImage } from './ProductImage';
import { StockBadge } from './StockBadge';
import type { Product } from '@/types';

export function ProductCard({
  product,
  onView,
}: {
  product: Product;
  onView: (product: Product) => void;
}) {
  const { add } = useCart();
  const { toast } = useToast();

  return (
    <article className="card">
      <div
        className="thumb"
        role="button"
        tabIndex={0}
        onClick={() => onView(product)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onView(product)}
        aria-label={`View ${product.name}`}
      >
        <div className="badges">
          {product.is_new && <span className="pill pill-new">New</span>}
          {product.is_popular && <span className="pill pill-pop">★ Popular</span>}
          {product.is_out_of_stock && <span className="pill pill-out">Sold out</span>}
        </div>
        <span className="catlabel">{product.category}</span>
        <ProductImage product={product} />
      </div>

      <div className="body">
        <h3>{product.name}</h3>
        <p className="desc">{product.description}</p>
        <StockBadge product={product} />
        <div className="foot">
          <div className="price tnum">{formatNaira(product.price)}</div>
          <button
            className="add"
            disabled={product.is_out_of_stock}
            aria-label={`Add ${product.name} to cart`}
            onClick={() => {
              add(product);
              toast(`Added “${product.name}” to cart`);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
