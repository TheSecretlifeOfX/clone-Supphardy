import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Supabase client — null when env vars are not configured, in which case the
 * app falls back to the bundled seed catalog (see src/hooks/useProducts.ts).
 * The anon key is safe in the browser; it is guarded by Row Level Security.
 */
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const hasSupabase = Boolean(supabase);
