import { useEffect } from 'react'
import { Link } from 'react-router'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function CartDrawer() {
  const { isOpen, closeCart, lines, setQty, remove, subtotal, productFor } = useCart()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button
        type="button"
        aria-label="Close bag"
        className="absolute inset-0 h-full w-full cursor-default bg-black/30"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[hsl(var(--border))] px-6 py-5">
          <h2 className="text-[12px] tracking-luxe-sm">YOUR BAG</h2>
          <button
            type="button"
            aria-label="Close bag"
            onClick={closeCart}
            className="inline-flex h-11 w-11 -mr-3 items-center justify-center transition-opacity duration-300 hover:opacity-50"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl font-light">Your bag is empty</p>
              <p className="mt-3 text-sm text-[hsl(var(--ink-soft))]">
                Discover the Lumiclear collection — two considered essentials.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-8 border border-[hsl(var(--ink))] px-8 py-3 text-[11px] tracking-luxe-sm transition-colors duration-300 hover:bg-[hsl(var(--ink))] hover:text-white"
              >
                DISCOVER THE COLLECTION
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[hsl(var(--border))]">
              {lines.map((line) => {
                const p = productFor(line.productId)
                if (!p) return null
                return (
                  <li key={line.productId} className="flex gap-5 py-6">
                    <Link to={`/product/${p.slug}`} onClick={closeCart} className="shrink-0">
                      <img src={p.image} alt={p.name} className="h-24 w-20 object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-lg leading-tight">{p.name}</p>
                          <p className="mt-1 text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{p.size}</p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${p.name} from bag`}
                          onClick={() => remove(line.productId)}
                          className="inline-flex h-8 w-8 items-center justify-center transition-opacity duration-300 hover:opacity-50"
                        >
                          <X className="h-4 w-4" strokeWidth={1.25} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-[hsl(var(--border))]">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(line.productId, line.qty - 1)}
                            className="inline-flex h-9 w-9 items-center justify-center transition-opacity duration-300 hover:opacity-50"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.25} />
                          </button>
                          <span className="w-8 text-center text-sm">{line.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(line.productId, line.qty + 1)}
                            className="inline-flex h-9 w-9 items-center justify-center transition-opacity duration-300 hover:opacity-50"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.25} />
                          </button>
                        </div>
                        <span className="text-sm">{formatPrice(p.price * line.qty)}</span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-[hsl(var(--border))] px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">SUBTOTAL</span>
              <span className="font-display text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-[hsl(var(--ink-soft))]">
              Complimentary UK delivery on orders over £50. Taxes calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="mt-5 block bg-[hsl(var(--ink))] py-4 text-center text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-85"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}
