import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CartLine, Product } from '@/types';

interface CartContextValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (product: Product) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'sh-cart';

type StoredCart = Record<string, number>; // productId -> qty

function loadStored(): StoredCart {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as StoredCart;
  } catch {
    return {};
  }
}

export function CartProvider({
  products,
  children,
}: {
  products: Product[];
  children: ReactNode;
}) {
  const [qtyById, setQtyById] = useState<StoredCart>(loadStored);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(qtyById));
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
  }, [qtyById]);

  const lines = useMemo<CartLine[]>(() => {
    return Object.entries(qtyById)
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === id);
        return product ? { product, qty } : null;
      })
      .filter((l): l is CartLine => l !== null);
  }, [qtyById, products]);

  const add = useCallback((product: Product) => {
    if (product.is_out_of_stock) return;
    setQtyById((prev) => ({ ...prev, [product.id]: (prev[product.id] ?? 0) + 1 }));
  }, []);

  const increment = useCallback((id: string) => {
    setQtyById((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }, []);

  const decrement = useCallback((id: string) => {
    setQtyById((prev) => {
      const next = { ...prev };
      const q = (next[id] ?? 0) - 1;
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setQtyById((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clear = useCallback(() => setQtyById({}), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    return { lines, count, subtotal, add, increment, decrement, remove, clear };
  }, [lines, add, increment, decrement, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
