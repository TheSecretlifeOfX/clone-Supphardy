import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { DEFAULT_ZONES } from '@/lib/config';
import type { DeliveryZone } from '@/types';

/**
 * Reads delivery fees from the `app_settings` table
 * (keys: delivery_fee_lagos, delivery_fee_outside), falling back to defaults.
 */
export function useDeliveryZones(): DeliveryZone[] {
  const [zones, setZones] = useState<DeliveryZone[]>(DEFAULT_ZONES);

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from('app_settings')
        .select('key,value')
        .in('key', ['delivery_fee_lagos', 'delivery_fee_outside']);

      if (cancelled || error || !data) return;

      const map = new Map(data.map((r: { key: string; value: number }) => [r.key, Number(r.value)]));
      setZones([
        { label: 'Lagos', fee: map.get('delivery_fee_lagos') ?? DEFAULT_ZONES[0].fee },
        { label: 'Outside Lagos', fee: map.get('delivery_fee_outside') ?? DEFAULT_ZONES[1].fee },
      ]);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return zones;
}
