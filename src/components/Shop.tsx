import { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';

export function Shop({ products, onView }: { products: Product[]; onView: (p: Product) => void }) {
  const [activeCat, setActiveCat] = useState('All');
  const [query, setQuery] = useState('');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [products],
  );

  const countFor = (cat: string) =>
    cat === 'All' ? products.length : products.filter((p) => p.category === cat).length;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = activeCat === 'All' || p.category === activeCat;
      const okQ = !q || `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [products, activeCat, query]);

  return (
    <section className="section wrap" id="shop">
      <div className="section-head">
        <div>
          <span className="eyebrow">The Store</span>
          <h2>Shop SuppHardy Products</h2>
          <p>
            Browse our premium selection of bodybuilding supplements — formulated by expert
            nutritionists and fitness professionals.
          </p>
        </div>
      </div>

      <div className="toolbar">
        <div className="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" />
          </svg>
          <input
            id="product-search"
            type="search"
            placeholder="Search whey, creatine, mass gainers…"
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="chips">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip${cat === activeCat ? ' active' : ''}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat} <span style={{ opacity: 0.7 }}>{countFor(cat)}</span>
          </button>
        ))}
      </div>

      <div style={{ height: '1.2rem' }} />

      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onView={onView} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3 style={{ fontSize: '1.4rem' }}>No products found</h3>
          <p>Try a different search term or filter.</p>
        </div>
      )}
    </section>
  );
}
