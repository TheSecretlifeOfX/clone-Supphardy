import { STORE } from '@/lib/config';
import type { Product } from '@/types';

export function Footer({ products }: { products: Product[] }) {
  const categories = Array.from(new Set(products.map((p) => p.category))).slice(0, 5);

  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top" style={{ fontSize: '1.35rem' }}>
              <span className="mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M6.5 6.5v11M17.5 6.5v11M4 9v6M20 9v6M6.5 12h11" />
                </svg>
              </span>
              <span>
                <b>Supp</b>Hardy
              </span>
            </a>
            <p style={{ color: 'hsl(var(--muted))', maxWidth: '34ch', marginTop: '0.8rem' }}>
              Premium supplements for serious athletes and bodybuilders who demand excellence.
            </p>
          </div>

          <div>
            <h4>Shop</h4>
            <ul>
              {categories.map((c) => (
                <li key={c}>
                  <a href="#shop">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#shop">All Products</a></li>
              <li><a href="#">Personal Training</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li><a href="#">Delivery Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} SuppHardy. All rights reserved.</span>
          <span>Secure checkout · Bank transfer &amp; WhatsApp confirmation</span>
        </div>
      </div>
    </footer>
  );
}
