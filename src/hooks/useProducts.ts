import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { SEED_PRODUCTS } from '@/data/products';
import type { Product } from '@/types';

interface ProductsState {
  products: Product[];
  loading: boolean;
  /** 'supabase' when loaded live, 'seed' when using the bundled fallback. */
  source: 'supabase' | 'seed';
  error: string | null;
}

/**
 * Loads products from Supabase when configured; otherwise (or on error)
 * falls back to the bundled seed catalog so the app always renders.
 */
export function useProducts(): ProductsState {
  const [state, setState] = useState<ProductsState>({
    products: SEED_PRODUCTS,
    loading: Boolean(supabase),
    source: 'seed',
    error: null,
  });

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_hidden', false)
        .order('category', { ascending: true });

      if (cancelled) return;

      if (error || !data || data.length === 0) {
        setState({
          products: SEED_PRODUCTS,
          loading: false,
          source: 'seed',
          error: error?.message ?? null,
        });
        return;
      }

      setState({
        products: data as Product[],
        loading: false,
        source: 'supabase',
        error: null,
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
