import { Link } from 'react-router'

const DISCOVER = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/product/lumiclear-target-serum', label: 'Lumiclear Target Serum' },
  { to: '/product/lumiclear-radiance-cream', label: 'Lumiclear Radiance Cream' },
  { to: '/formulation', label: 'Formulation' },
  { to: '/the-ritual', label: 'The Ritual' },
  { to: '/journal', label: 'The Journal' },
]

const CARE = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/faq#shipping', label: 'Shipping & Delivery' },
  { to: '/faq#returns', label: 'Returns & Refunds' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-medium tracking-[0.22em]">SHENERIO</p>
            <p className="mt-1 text-[10px] tracking-[0.5em] text-[hsl(var(--ink-soft))]">LONDON</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              Advanced skincare. Refined by design. Founded in London, United Kingdom — formulated and manufactured
              in South Korea.
            </p>
          </div>
          <nav className="md:col-span-3" aria-label="Discover">
            <p className="text-[11px] tracking-luxe-sm">DISCOVER</p>
            <ul className="mt-5 space-y-3">
              {DISCOVER.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-[hsl(var(--ink-soft))] transition-opacity duration-300 hover:opacity-50">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="md:col-span-2" aria-label="Customer care">
            <p className="text-[11px] tracking-luxe-sm">CUSTOMER CARE</p>
            <ul className="mt-5 space-y-3">
              {CARE.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-[hsl(var(--ink-soft))] transition-opacity duration-300 hover:opacity-50">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-luxe-sm">CONNECT</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-sm text-[hsl(var(--ink-soft))] transition-opacity duration-300 hover:opacity-50">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="text-sm text-[hsl(var(--ink-soft))] transition-opacity duration-300 hover:opacity-50">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="text-sm text-[hsl(var(--ink-soft))] transition-opacity duration-300 hover:opacity-50">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[hsl(var(--border))] pt-8 text-xs text-[hsl(var(--ink-soft))] md:flex-row md:items-center">
          <span>© SHENERIO. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/faq#privacy" className="transition-opacity duration-300 hover:opacity-50">Privacy Policy</Link>
            <Link to="/faq#terms" className="transition-opacity duration-300 hover:opacity-50">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
