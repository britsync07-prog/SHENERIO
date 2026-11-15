import { Link } from 'react-router'
import Reveal from '@/components/Reveal'
import { formatPrice, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Shop() {
  const { add, openCart } = useCart()

  return (
    <div className="pt-16 md:pt-20">
      <header className="mx-auto max-w-[1400px] px-6 pb-6 pt-16 text-center md:px-10 md:pt-24">
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE COLLECTION</p>
        <h1 className="mt-5 font-display text-5xl font-light md:text-6xl">Discover the world of SHENERIO</h1>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
          Our inaugural collection brings together two complementary formulations, created to become part of a
          considered daily skincare ritual.
        </p>
      </header>

      <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <article className="group">
                <Link to={`/product/${p.slug}`} className="block overflow-hidden bg-[hsl(var(--blush-soft))]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="mt-7 text-center">
                  <h2 className="font-display text-3xl font-normal">{p.name}</h2>
                  <p className="mt-2 text-[12px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{p.tagline}</p>
                  <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
                    {p.shortDescription}
                  </p>
                  <p className="mt-5 font-display text-2xl">{formatPrice(p.price)}</p>
                  <div className="mt-6 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        add(p.id)
                        openCart()
                      }}
                      className="bg-[hsl(var(--ink))] px-8 py-3.5 text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-80"
                    >
                      ADD TO CART
                    </button>
                    <Link
                      to={`/product/${p.slug}`}
                      className="border border-[hsl(var(--ink))] px-8 py-3.5 text-[11px] tracking-luxe-sm transition-colors duration-300 hover:bg-[hsl(var(--ink))] hover:text-white"
                    >
                      DISCOVER
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-24 text-center">
          <p className="font-display text-2xl font-light text-[hsl(var(--ink-soft))]">
            The beginning of a considered approach to modern skincare.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
