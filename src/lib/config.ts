import type { DeliveryZone } from '@/types';

// Store contact + payment details. Overridable via .env (see .env.example).
export const STORE = {
  name: 'SuppHardy',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER ?? '2347035270914',
  bank: {
    name: import.meta.env.VITE_BANK_NAME ?? 'FCMB',
    accountName: import.meta.env.VITE_BANK_ACCOUNT_NAME ?? 'Inioluwa',
    // Placeholder by default — set VITE_BANK_ACCOUNT_NUMBER in your .env.
    accountNumber: import.meta.env.VITE_BANK_ACCOUNT_NUMBER ?? '0000000000',
  },
} as const;

// Default zones; overridden at runtime by the `app_settings` table when available.
export const DEFAULT_ZONES: DeliveryZone[] = [
  { label: 'Lagos', fee: 4000 },
  { label: 'Outside Lagos', fee: 7000 },
];
