/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // SuppHardy brand — preserved from the original site
        brand: {
          blue: '#0077be',
          'blue-dark': '#005a8b',
          cyan: '#00bcd4',
        },
        // Token-driven surfaces (defined as CSS vars in src/index.css)
        bg: 'hsl(var(--bg) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        'surface-2': 'hsl(var(--surface-2) / <alpha-value>)',
        ink: 'hsl(var(--ink) / <alpha-value>)',
        'ink-soft': 'hsl(var(--ink-soft) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        line: 'hsl(var(--line) / <alpha-value>)',
        ok: '#0f9d58',
        warn: '#e08a00',
        danger: '#d64545',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        body: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.6rem',
        lg: '1rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,21,34,.04), 0 8px 24px -12px rgba(11,21,34,.18)',
        lift: '0 24px 60px -20px rgba(0,90,139,.35)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
