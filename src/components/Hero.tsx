import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { formatNaira } from '@/lib/format';
import { ProductImage } from './ProductImage';
import type { Product } from '@/types';

export function Hero({ products }: { products: Product[] }) {
  const { add } = useCart();
  const { toast } = useToast();

  const featured =
    products.find((p) => p.is_popular) ?? products.find((p) => p.is_new) ?? products[0];

  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">Premium Supplements</span>
          <h1>
            Fuel Your <span className="hl">Strongest</span> Self.
          </h1>
          <p className="lead">
            Premium supplements designed for serious athletes and bodybuilders who demand excellence.
            Created by bodybuilders and fitness experts for maximum results.
          </p>
          <div className="hero-cta">
            <a href="#shop" className="btn btn-primary">
              Shop SuppHardy Products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#about" className="btn btn-ghost">Why SuppHardy</a>
          </div>
          <div className="trust">
            <div className="t">
              <span className="n">{products.length}</span>
              <span className="l">Products in stock</span>
            </div>
            <div className="t">
              <span className="n">100%</span>
              <span className="l">Lab-tested purity</span>
            </div>
            <div className="t">
              <span className="n">24h</span>
              <span className="l">Lagos dispatch</span>
            </div>
          </div>
        </div>

        {featured && (
          <aside className="hero-card">
            <span className="tag">{featured.is_popular ? 'Best seller' : 'Featured'}</span>
            <h3>{featured.name}</h3>
            <div className="prod-visual">
              <ProductImage product={featured} />
            </div>
            <div className="row">
              <span>{featured.category}</span>
              <span className="price">{formatNaira(featured.price)}</span>
            </div>
            <button
              className="btn btn-primary btn-block"
              style={{ marginTop: '1rem' }}
              onClick={() => {
                add(featured);
                toast(`Added “${featured.name}” to cart`);
              }}
            >
              Add to cart
            </button>
          </aside>
        )}
      </div>
    </section>
  );
}
