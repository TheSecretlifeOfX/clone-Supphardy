import { useEffect, useMemo, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { STORE } from '@/lib/config';
import { supabase } from '@/lib/supabase';
import { formatNaira, makeOrderRef } from '@/lib/format';
import { Modal } from './Modal';
import type { DeliveryZone } from '@/types';

export function CheckoutModal({
  open,
  onClose,
  zones,
  zoneIndex,
  onZoneChange,
}: {
  open: boolean;
  onClose: () => void;
  zones: DeliveryZone[];
  zoneIndex: number;
  onZoneChange: (index: number) => void;
}) {
  const { lines, subtotal, clear } = useCart();
  const { toast } = useToast();
  const [ref, setRef] = useState(makeOrderRef);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Fresh reference each time the modal is opened.
  useEffect(() => {
    if (open) setRef(makeOrderRef());
  }, [open]);

  const zone = zones[zoneIndex];
  const ship = zone?.fee ?? 0;
  const total = subtotal + ship;

  const waHref = useMemo(() => {
    const itemLines = lines.map((l) => `${l.qty}× ${l.product.name}`).join('\n');
    const msg = [
      `Hi SuppHardy! I've placed an order (Ref: ${ref}).`,
      '',
      itemLines,
      '',
      `Subtotal: ${formatNaira(subtotal)}`,
      `Delivery (${zone?.label ?? ''}): ${formatNaira(ship)}`,
      `Total: ${formatNaira(total)}`,
      '',
      `Name: ${name || '—'}`,
      `Phone: ${phone || '—'}`,
      `Address: ${address || '—'}`,
      '',
      "I'd like to confirm my bank transfer.",
    ].join('\n');
    return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [lines, ref, subtotal, ship, total, zone, name, phone, address]);

  async function persistOrder() {
    if (!supabase) return;
    try {
      await supabase.from('orders').insert({
        reference: ref,
        customer_name: name,
        customer_phone: phone,
        address,
        delivery_zone: zone?.label,
        delivery_fee: ship,
        subtotal,
        total,
        items: lines.map((l) => ({ id: l.product.id, name: l.product.name, qty: l.qty, price: l.product.price })),
        status: 'pending',
      });
    } catch (err) {
      // Best-effort — WhatsApp confirmation still proceeds if this fails.
      console.warn('Order save failed (check your `orders` table schema/RLS):', err);
    }
  }

  function handleConfirm() {
    void persistOrder();
    toast('Order placed — confirm on WhatsApp');
    clear();
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} labelledBy="ck-title">
      <div className="ck">
        <span className="eyebrow">Secure checkout powered by SuppHardy</span>
        <h2 id="ck-title">Checkout</h2>

        <div className="grid2">
          <div className="field">
            <label htmlFor="ckName">Full name</label>
            <input id="ckName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="ckPhone">Phone</label>
            <input id="ckPhone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="080…" />
          </div>
          <div className="field full">
            <label htmlFor="ckAddr">Delivery address</label>
            <textarea id="ckAddr" rows={2} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, city…" />
          </div>
          <div className="field full">
            <label htmlFor="ckZone">Delivery zone</label>
            <select id="ckZone" value={zoneIndex} onChange={(e) => onZoneChange(Number(e.target.value))}>
              {zones.map((z, i) => (
                <option key={z.label} value={i}>
                  {z.label} — {formatNaira(z.fee)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sumrow" style={{ marginTop: '1rem' }}>
          <span>Subtotal</span>
          <span className="tnum">{formatNaira(subtotal)}</span>
        </div>
        <div className="sumrow">
          <span>Delivery — {zone?.label}</span>
          <span className="tnum">{formatNaira(ship)}</span>
        </div>
        <div className="sumrow total">
          <span>Total</span>
          <span className="tnum">{formatNaira(total)}</span>
        </div>

        <h4
          style={{
            fontFamily: 'var(--display)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--brand-blue)',
            margin: '1.4rem 0 0.3rem',
          }}
        >
          Payment — Bank transfer
        </h4>
        <p className="note" style={{ marginTop: 0 }}>
          Please complete your bank transfer to the following account, then confirm on WhatsApp.
        </p>
        <div className="bank">
          <div className="r">
            <span>Bank Name</span>
            <b>{STORE.bank.name}</b>
          </div>
          <div className="r">
            <span>Account Name</span>
            <b>{STORE.bank.accountName}</b>
          </div>
          <div className="r">
            <span>Account Number</span>
            <b className="tnum">{STORE.bank.accountNumber}</b>
          </div>
          <div className="r">
            <span>Reference</span>
            <b>{ref}</b>
          </div>
        </div>
        <p className="note">
          Card payment is currently under development — bank transfer is confirmed manually via WhatsApp.
        </p>

        <a
          className="btn wa btn-block"
          style={{ marginTop: '1rem' }}
          target="_blank"
          rel="noopener noreferrer"
          href={waHref}
          onClick={handleConfirm}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95s-.5-.15-.7.15-.8.95-1 1.15-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.6l.44-.52a2 2 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.65-1.57-.9-2.15s-.48-.48-.66-.49h-.56a1.1 1.1 0 0 0-.79.37 3.3 3.3 0 0 0-1 2.44 5.7 5.7 0 0 0 1.2 3 13.1 13.1 0 0 0 5 4.42c.7.3 1.24.48 1.67.62a4 4 0 0 0 1.84.12 3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .17-1.4c-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
          </svg>
          I've Paid — Verify via WhatsApp
        </a>
        <p className="paid-note">Order information will be saved in your browser · Payment confirmation sent via WhatsApp</p>
      </div>
    </Modal>
  );
}
