import { Link } from 'react-router'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function Checkout() {
  const { lines, subtotal, productFor, clear } = useCart()

  return (
    <div className="pt-16 md:pt-20">
      <section className="mx-auto max-w-[760px] px-6 py-24 text-center md:py-36">
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">CHECKOUT</p>
        <h1 className="mt-5 font-display text-4xl font-light md:text-5xl">Secure checkout</h1>

        {lines.length > 0 ? (
          <>
            <ul className="mx-auto mt-10 max-w-md divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))] text-left">
              {lines.map((l) => {
                const p = productFor(l.productId)
                if (!p) return null
                return (
                  <li key={l.productId} className="flex items-center justify-between py-4 text-sm">
                    <span>
                      {p.name} <span className="text-[hsl(var(--ink-soft))]">× {l.qty}</span>
                    </span>
                    <span>{formatPrice(p.price * l.qty)}</span>
                  </li>
                )
              })}
              <li className="flex items-center justify-between py-4">
                <span className="text-[11px] tracking-luxe-sm">SUBTOTAL</span>
                <span className="font-display text-xl">{formatPrice(subtotal)}</span>
              </li>
            </ul>
            <p className="mx-auto mt-10 max-w-md bg-[hsl(var(--blush-soft))] px-6 py-6 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              This boutique is currently in preview. Payment processing will be activated at launch — please
              contact the SHENERIO team to place an order in the meantime.
            </p>
            <button
              type="button"
              onClick={clear}
              className="mt-8 border border-[hsl(var(--ink))] px-8 py-3.5 text-[11px] tracking-luxe-sm transition-colors duration-300 hover:bg-[hsl(var(--ink))] hover:text-white"
            >
              CLEAR BAG
            </button>
          </>
        ) : (
          <>
            <p className="mx-auto mt-8 max-w-md text-[15px] text-[hsl(var(--ink-soft))]">
              Your bag is empty. Discover the Lumiclear collection to begin.
            </p>
            <Link
              to="/shop"
              className="mt-10 inline-block bg-[hsl(var(--ink))] px-10 py-4 text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-80"
            >
              DISCOVER THE COLLECTION
            </Link>
          </>
        )}
      </section>
    </div>
  )
}
