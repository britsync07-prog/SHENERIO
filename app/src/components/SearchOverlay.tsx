import { useEffect } from 'react'
import { Link } from 'react-router'
import { X } from 'lucide-react'
import { products } from '@/data/products'

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search">
      <div className="mx-auto max-w-3xl px-6 pt-24 md:pt-32">
        <div className="flex items-center justify-between">
          <span className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">SEARCH SHENERIO</span>
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center transition-opacity duration-300 hover:opacity-50"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
        <p className="mt-10 font-display text-3xl font-light leading-snug md:text-4xl">
          Explore the Lumiclear collection
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.slug}`}
              onClick={onClose}
              className="group flex items-center gap-5 border border-[hsl(var(--border))] p-4 transition-colors duration-300 hover:border-[hsl(var(--ink))]"
            >
              <img src={p.image} alt={p.name} className="h-20 w-20 object-cover" loading="lazy" />
              <span>
                <span className="block font-display text-xl">{p.name}</span>
                <span className="mt-1 block text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))] group-hover:opacity-60">
                  {p.size} — £{p.price.toFixed(2)}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 pb-16">
          {[
            { to: '/shop', label: 'Shop all' },
            { to: '/formulation', label: 'Formulation' },
            { to: '/the-ritual', label: 'The Ritual' },
            { to: '/our-philosophy', label: 'Our Philosophy' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="text-[11px] tracking-luxe-sm underline underline-offset-8 decoration-[hsl(var(--border))] transition-opacity duration-300 hover:opacity-50"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
