/** Format a Naira amount, e.g. 160000 -> "₦160,000". */
export function formatNaira(amount: number): string {
  return '₦' + Number(amount || 0).toLocaleString('en-NG');
}

/** Deterministic brand gradient per category, for placeholder tiles. */
const PALETTE: [string, string][] = [
  ['#0077be', '#00bcd4'],
  ['#005a8b', '#38b6ff'],
  ['#0a6cae', '#22d3ee'],
  ['#0077be', '#5fe0f0'],
  ['#064e6b', '#0aa9c9'],
  ['#0088a3', '#66e2ef'],
  ['#0060a0', '#00bcd4'],
];

export function categoryGradient(category: string): string {
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  const [a, b] = PALETTE[hash % PALETTE.length];
  return `linear-gradient(150deg, ${a}, ${b})`;
}

/** Short order reference, e.g. "SH-9F2KQ". */
export function makeOrderRef(): string {
  return 'SH-' + Math.random().toString(36).slice(2, 7).toUpperCase();
}
