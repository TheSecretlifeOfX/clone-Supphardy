import { useState } from 'react';
import { useToast } from '@/context/ToastContext';

export function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  return (
    <section className="wrap section" style={{ paddingTop: 0 }}>
      <div className="news">
        <div>
          <span className="eyebrow">Stay in the loop</span>
          <h2>Ready to Transform Your Workout?</h2>
          <p>Subscribe to get special offers, free giveaways, and training tips.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail('');
            toast("You've been added to our newsletter.");
          }}
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
