import { useEffect, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useDeliveryZones } from '@/hooks/useDeliveryZones';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Shop } from '@/components/Shop';
import { Features } from '@/components/Features';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductModal } from '@/components/ProductModal';
import { CheckoutModal } from '@/components/CheckoutModal';
import type { Product } from '@/types';

export default function App() {
  const { products, loading } = useProducts();
  const zones = useDeliveryZones();

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [viewing, setViewing] = useState<Product | null>(null);
  const [zoneIndex, setZoneIndex] = useState(0);

  const anyOverlay = cartOpen || checkoutOpen || viewing !== null;

  // Lock body scroll while any overlay is open.
  useEffect(() => {
    document.body.style.overflow = anyOverlay ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [anyOverlay]);

  const closeAll = () => {
    setCartOpen(false);
    setCheckoutOpen(false);
    setViewing(null);
  };

  return (
    <CartProvider products={products}>
      <div id="top" />
      <Header onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero products={products} />
        {loading ? (
          <div className="wrap section empty">Loading products…</div>
        ) : (
          <Shop products={products} onView={setViewing} />
        )}
        <Features />
        <Newsletter />
      </main>

      <Footer products={products} />

      {/* Overlays */}
      <div
        className={`scrim${anyOverlay ? ' show' : ''}`}
        hidden={!anyOverlay}
        onClick={closeAll}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        zones={zones}
        zoneIndex={zoneIndex}
        onZoneChange={setZoneIndex}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <ProductModal product={viewing} onClose={() => setViewing(null)} />

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        zones={zones}
        zoneIndex={zoneIndex}
        onZoneChange={setZoneIndex}
      />
    </CartProvider>
  );
}
