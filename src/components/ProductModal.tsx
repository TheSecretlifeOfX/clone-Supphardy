import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { formatNaira } from '@/lib/format';
import { Modal } from './Modal';
import { ProductImage } from './ProductImage';
import { StockBadge } from './StockBadge';
import type { Product } from '@/types';

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add } = useCart();
  const { toast } = useToast();

  return (
    <Modal open={product !== null} onClose={onClose} labelledBy="pm-title">
      {product && (
        <div className="pm">
          <div className="media">
            <ProductImage product={product} />
          </div>
          <div className="info">
            <span className="eyebrow">{product.category}</span>
            <h2 id="pm-title">{product.name}</h2>
            <div className="tags">
              {product.is_new && <span className="pill pill-new">New</span>}
              {product.is_popular && <span className="pill pill-pop">★ Popular</span>}
              <StockBadge product={product} />
            </div>
            <div className="price tnum">{formatNaira(product.price)}</div>
            <p className="lead">{product.full_description || product.description}</p>

            {product.benefits.length > 0 && (
              <>
                <h4>Key benefits</h4>
                <ul>
                  {product.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            )}

            {product.ingredients.length > 0 && (
              <>
                <h4>Ingredients</h4>
                <div className="tags">
                  {product.ingredients.map((ing, i) => (
                    <span className="tag" key={i}>
                      {ing}
                    </span>
                  ))}
                </div>
              </>
            )}

            {product.usage && (
              <>
                <h4>How to use</h4>
                <div className="usage">{product.usage}</div>
              </>
            )}

            <button
              className="btn btn-primary btn-block"
              style={{ marginTop: '1.3rem' }}
              disabled={product.is_out_of_stock}
              onClick={() => {
                add(product);
                toast(`Added “${product.name}” to cart`);
              }}
            >
              {product.is_out_of_stock ? 'Out of stock' : `Add to cart · ${formatNaira(product.price)}`}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
