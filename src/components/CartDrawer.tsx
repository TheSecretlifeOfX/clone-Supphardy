import { useCart } from '@/context/CartContext';
import { formatNaira } from '@/lib/format';
import { ProductImage } from './ProductImage';
import type { DeliveryZone } from '@/types';

export function CartDrawer({
  open,
  onClose,
  zones,
  zoneIndex,
  onZoneChange,
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  zones: DeliveryZone[];
  zoneIndex: number;
  onZoneChange: (index: number) => void;
  onCheckout: () => void;
}) {
  const { lines, count, subtotal, increment, decrement, remove } = useCart();
  const ship = zones[zoneIndex]?.fee ?? 0;

  return (
    <aside className={`drawer${open ? ' open' : ''}`} aria-label="Shopping cart" role="dialog" aria-modal="true">
      <div className="drawer-head">
        <h3>Your Cart</h3>
        <button className="close" onClick={onClose} aria-label="Close cart">
          ✕
        </button>
      </div>

      {count === 0 ? (
        <div className="cart-items">
          <div className="empty" style={{ margin: 'auto' }}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted))" strokeWidth="1.6">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            <h3 style={{ margin: '0.6rem 0 0.2rem' }}>Your cart is empty</h3>
            <p>Looks like you haven't added any products to your cart yet.</p>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {lines.map(({ product, qty }) => (
              <div className="citem" key={product.id}>
                <div className="th">
                  <ProductImage product={product} />
                </div>
                <div>
                  <div className="nm">{product.name}</div>
                  <div className="pr tnum">{formatNaira(product.price)}</div>
                  <div className="qty" style={{ marginTop: '0.35rem' }}>
                    <button onClick={() => decrement(product.id)} aria-label="Decrease">
                      −
                    </button>
                    <span className="tnum">{qty}</span>
                    <button onClick={() => increment(product.id)} aria-label="Increase">
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="price tnum" style={{ fontSize: '1.05rem' }}>
                    {formatNaira(product.price * qty)}
                  </div>
                  <button
                    onClick={() => remove(product.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: 'var(--danger)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      marginTop: '0.3rem',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="drawer-foot">
            <div className="zone">
              <label htmlFor="zoneSel">Delivery zone</label>
              <select
                id="zoneSel"
                value={zoneIndex}
                onChange={(e) => onZoneChange(Number(e.target.value))}
              >
                {zones.map((z, i) => (
                  <option key={z.label} value={i}>
                    {z.label} — {formatNaira(z.fee)}
                  </option>
                ))}
              </select>
            </div>
            <div className="sumrow">
              <span>Subtotal</span>
              <span className="tnum">{formatNaira(subtotal)}</span>
            </div>
            <div className="sumrow">
              <span>Delivery</span>
              <span className="tnum">{formatNaira(ship)}</span>
            </div>
            <div className="sumrow total">
              <span>Total</span>
              <span className="tnum">{formatNaira(subtotal + ship)}</span>
            </div>
            <button className="btn btn-primary btn-block" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
