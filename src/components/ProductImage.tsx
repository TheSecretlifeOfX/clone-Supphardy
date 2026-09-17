import { useState } from 'react';
import { categoryGradient } from '@/lib/format';
import type { Product } from '@/types';

/**
 * Renders the product photo, falling back to a branded gradient tile
 * (with the product name) if the image is missing or fails to load.
 */
export function ProductImage({ product, className }: { product: Product; className?: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = product.image && !failed;

  if (showImage) {
    return (
      <img
        className={className}
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="ph" style={{ background: categoryGradient(product.category) }} aria-label={product.name}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85">
        <path d="M6.5 6.5v11M17.5 6.5v11M4 9v6M20 9v6M6.5 12h11" />
      </svg>
      <span>{product.name}</span>
    </div>
  );
}
