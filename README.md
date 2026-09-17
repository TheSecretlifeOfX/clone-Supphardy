# SuppHardy Storefront

A redesigned front-end for the **SuppHardy** premium-supplements store, built as a real,
git-ready project: **React + TypeScript + Vite + Tailwind CSS**, with a **Supabase** data layer.

It preserves the original brand identity (blue → cyan), the full product catalog, Naira pricing,
the Lagos / Outside-Lagos delivery zones, and the bank-transfer + WhatsApp checkout flow — while
upgrading the typography, layout, and interactions.

## Features

- **Product catalog** with category filters (live counts), instant search, and stock badges.
- **Quick-view modal** — full description, benefits, ingredients, usage.
- **Cart drawer** with quantity controls, delivery-zone selector, and live totals (persisted to `localStorage`).
- **Checkout** — shipping form, bank-transfer details, auto-generated order reference, and a
  prefilled **WhatsApp** confirmation link. Best-effort order save to Supabase when configured.
- **Light / dark theme** toggle, fully responsive (sticky mobile nav), reduced-motion aware.
- **Graceful data fallback** — runs on a bundled seed catalog when Supabase env vars are absent.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your Supabase + store details (optional)
npm run dev            # http://localhost:5173
```

The app runs out of the box using the bundled seed catalog in `src/data/products.ts`.
To use live data, set the Supabase variables in `.env`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/publishable key (safe in the browser; guarded by RLS) |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number for order confirmation (default: `2347035270914`) |
| `VITE_BANK_NAME` / `VITE_BANK_ACCOUNT_NAME` / `VITE_BANK_ACCOUNT_NUMBER` | Bank-transfer details shown at checkout |

> The bank account number defaults to a placeholder (`0000000000`). Set `VITE_BANK_ACCOUNT_NUMBER`
> to your real receiving account.

## Data model (Supabase)

- **`products`** — `id, name, description, full_description, price, image, category, is_new,
  is_popular, is_out_of_stock, is_hidden, inventory, benefits[], ingredients[], usage`
- **`app_settings`** — key/value; reads `delivery_fee_lagos`, `delivery_fee_outside`.
- **`orders`** — checkout inserts a best-effort row; adjust the payload in
  `src/components/CheckoutModal.tsx` to match your table's columns and RLS policy.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Type-check only |
| `npm run lint` | Lint the project |

## Project structure

```
src/
  components/   UI components (Header, Hero, Shop, ProductCard, CartDrawer, CheckoutModal, …)
  context/      Cart, Theme, Toast providers
  hooks/        useProducts, useDeliveryZones
  lib/          supabase client, config, formatting helpers
  data/         bundled seed catalog (fallback)
  types/        shared TypeScript types
```

## Deploy

Any static host works (the original ran on **Vercel**):

```bash
npm run build   # outputs dist/
```

Set the same `VITE_*` environment variables in your host's dashboard.
