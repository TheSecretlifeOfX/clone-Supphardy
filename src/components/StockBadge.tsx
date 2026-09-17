import type { Product } from '@/types';

export function StockBadge({ product }: { product: Product }) {
  if (product.is_out_of_stock) {
    return (
      <span className="stock out">
        <span className="dot" />
        Out of stock
      </span>
    );
  }
  const low = product.inventory > 0 && product.inventory <= 15;
  return (
    <span className={`stock${low ? ' low' : ''}`}>
      <span className="dot" />
      {low ? 'Low stock' : 'In stock'}
    </span>
  );
}
