import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { Check, Minus, Plus, Star, StarHalf } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { useCart } from '@/context/CartContext'
import { formatPrice, products } from '@/data/products'

function Stars({ value, className = 'h-3.5 w-3.5' }: { value: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = value >= i - 0.25
        const half = !filled && value >= i - 0.75
        return half ? (
          <StarHalf key={i} className={`${className} fill-[hsl(var(--ink))] text-[hsl(var(--ink))]`} strokeWidth={1} />
        ) : (
          <Star
            key={i}
            className={`${className} ${filled ? 'fill-[hsl(var(--ink))] text-[hsl(var(--ink))]' : 'text-[hsl(var(--ink))]/25'}`}
            strokeWidth={1}
          />
        )
      })}
    </span>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug])
  const { add, openCart } = useCart()
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    product.image,
    product.lifestyleImage,
    ...[1, 2, 3, 4].map((i) => `/assets/${product.id}-crop-${i}.jpg`),
  ]

  const other = products.find((p) => p.id !== product.id)!

  const handleAdd = () => {
    add(product.id, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
    openCart()
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* breadcrumb */}
      <nav className="mx-auto max-w-[1400px] px-6 pt-8 text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))] md:px-10" aria-label="Breadcrumb">
        <Link to="/" className="transition-opacity duration-300 hover:opacity-50">HOME</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="transition-opacity duration-300 hover:opacity-50">SHOP</Link>
        <span className="mx-2">/</span>
        <span className="text-[hsl(var(--ink))]">{product.name.toUpperCase()}</span>
      </nav>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-10 md:grid-cols-2 md:px-10 md:py-14">
        {/* gallery */}
        <div>
          <div className="bg-[hsl(var(--blush-soft))]">
            <img
              key={activeImg}
              src={gallery[activeImg]}
              alt={`${product.name} — view ${activeImg + 1}`}
              className="aspect-[4/3] w-full object-cover"
              style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
            />
          </div>
          <div className="mt-4 grid grid-cols-6 gap-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View image ${i + 1}`}
                aria-pressed={i === activeImg}
                onClick={() => setActiveImg(i)}
                className={`overflow-hidden border transition-colors duration-300 ${
                  i === activeImg ? 'border-[hsl(var(--ink))]' : 'border-transparent hover:border-[hsl(var(--border))]'
                }`}
              >
                <img src={src} alt="" className="aspect-square w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* purchase panel */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE LUMICLEAR COLLECTION</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-[13px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{product.tagline}</p>

          <div className="mt-5 flex items-center gap-3">
            <Stars value={product.rating} />
            <a href="#reviews" className="text-xs text-[hsl(var(--ink-soft))] underline underline-offset-4 transition-opacity duration-300 hover:opacity-50">
              {product.rating.toFixed(1)} · {product.reviewCount} reviews
            </a>
          </div>

          <p className="mt-6 font-display text-3xl">{formatPrice(product.price)}</p>
          <p className="mt-1 text-xs text-[hsl(var(--ink-soft))]">{product.size}</p>

          {/* prominent benefits */}
          <ul className="mt-7 flex flex-wrap gap-2">
            {product.benefits.slice(0, 2).map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 border border-[hsl(var(--blush))] bg-[hsl(var(--blush-soft))] px-4 py-2 text-[11px] tracking-luxe-sm"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                {b.toUpperCase()}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <div className="flex items-center border border-[hsl(var(--ink))]">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="inline-flex h-12 w-11 items-center justify-center transition-opacity duration-300 hover:opacity-50"
              >
                <Minus className="h-4 w-4" strokeWidth={1.25} />
              </button>
              <span className="w-8 text-center text-sm" aria-live="polite">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="inline-flex h-12 w-11 items-center justify-center transition-opacity duration-300 hover:opacity-50"
              >
                <Plus className="h-4 w-4" strokeWidth={1.25} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="h-12 flex-1 bg-[hsl(var(--ink))] text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-85"
            >
              {added ? 'ADDED TO BAG' : 'ADD TO CART'}
            </button>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[hsl(var(--ink-soft))]">
            Complimentary UK delivery on orders over £50 · 30-day returns · Secure checkout
          </p>

          <div className="mt-10 border-t border-[hsl(var(--border))] pt-8">
            <h2 className="text-[11px] tracking-luxe-sm">DESCRIPTION</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* key ingredient highlights */}
      <section className="bg-[hsl(var(--blush-soft))]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <Reveal className="text-center">
            <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE SCIENCE BEHIND THE FORMULA</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">Key ingredients</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {product.ingredients.map((ing, i) => (
              <Reveal key={ing.name} delay={i * 120} className="text-center">
                <img
                  src={ing.image}
                  alt={ing.name}
                  className="mx-auto aspect-square w-full max-w-[320px] object-cover"
                  loading="lazy"
                />
                <h3 className="mt-6 font-display text-2xl">{ing.name}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-[hsl(var(--ink-soft))]">{ing.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* full science list */}
      <section className="mx-auto max-w-[900px] px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-light md:text-4xl">Inside the formulation</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-[hsl(var(--border))]">
          {product.science.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="grid gap-2 py-6 md:grid-cols-12">
                <h3 className="text-[12px] tracking-luxe-sm md:col-span-4">{s.name.toUpperCase()}</h3>
                <p className="text-[15px] leading-relaxed text-[hsl(var(--ink-soft))] md:col-span-8">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* benefits + how to use */}
      <section className="border-t border-[hsl(var(--border))]">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-light">Benefits</h2>
            <ul className="mt-8 space-y-4">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-[hsl(var(--ink-soft))]">
                  <Check className="h-4 w-4 shrink-0 text-[hsl(var(--ink))]" strokeWidth={1.5} />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-light">How to use</h2>
            <ol className="mt-8 space-y-4">
              {product.howToUse.map((step, i) => (
                <li key={i} className="flex gap-5 text-[15px] text-[hsl(var(--ink-soft))]">
                  <span className="font-display text-xl text-[hsl(var(--ink))]">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* reviews */}
      <section id="reviews" className="bg-[hsl(var(--blush-soft))]">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl font-light md:text-5xl">Customer reviews</h2>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Stars value={product.rating} className="h-4 w-4" />
              <span className="text-sm text-[hsl(var(--ink-soft))]">
                {product.rating.toFixed(1)} out of 5 · {product.reviewCount} reviews
              </span>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {product.reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure className="flex h-full flex-col bg-white p-8">
                  <Stars value={r.rating} />
                  <figcaption className="mt-4 font-display text-xl">{r.title}</figcaption>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                    “{r.text}”
                  </blockquote>
                  <p className="mt-5 text-xs text-[hsl(var(--ink-soft))]">
                    {r.name} · {r.date}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* complete your ritual */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal className="text-center">
          <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">COMPLETE YOUR RITUAL</p>
        </Reveal>
        <Reveal delay={100}>
          <Link to={`/product/${other.slug}`} className="group mx-auto mt-10 block max-w-2xl">
            <div className="overflow-hidden bg-[hsl(var(--blush-soft))]">
              <img
                src={other.lifestyleImage}
                alt={other.name}
                className="aspect-[16/7] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl">{other.name}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--ink-soft))]">{other.descriptor}</p>
              </div>
              <span className="text-sm">{formatPrice(other.price)}</span>
            </div>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
