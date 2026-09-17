import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { count } = useCart();
  const { theme, toggle } = useTheme();

  return (
    <header className="site">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="SuppHardy home">
          <span className="mark" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6.5 6.5v11M17.5 6.5v11M4 9v6M20 9v6M6.5 12h11" />
            </svg>
          </span>
          <span>
            <b>Supp</b>Hardy
          </span>
        </a>

        <nav className="nav-links">
          <a href="#top" className="active">Home</a>
          <a href="#shop">Products</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-spacer" />

        <button className="icon-btn" onClick={toggle} title="Toggle theme" aria-label="Toggle color theme">
          {theme === 'dark' ? (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )}
        </button>

        <button className="icon-btn" onClick={onOpenCart} aria-label="Open cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>
          {count > 0 && <span className="cart-count">{count}</span>}
        </button>
      </div>
    </header>
  );
}
