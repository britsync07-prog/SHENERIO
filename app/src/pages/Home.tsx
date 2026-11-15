import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { products, formatPrice } from '@/data/products'

const SLIDE_COUNT = 3
const AUTOPLAY_MS = 6500

function HeroSlider() {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT)
  }, [])

  useEffect(() => {
    timer.current = window.setInterval(() => go(index + 1), AUTOPLAY_MS)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [index, go])

  const slideCls = (i: number) =>
    `absolute inset-0 transition-opacity duration-[1200ms] ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`

  return (
    <section className="relative h-[88svh] min-h-[540px] w-full overflow-hidden bg-[hsl(var(--blush-soft))]" aria-roledescription="carousel" aria-label="Featured">
      {/* Slide 1 — silk still */}
      <div className={slideCls(0)} aria-hidden={index !== 0}>
        <img
          src="/assets/hero-still-1.jpg"
          alt="Blush pink silk draped in soft folds"
          className="hero-slide-img h-full w-full object-cover"
        />
      </div>
      {/* Slide 2 — cream texture still */}
      <div className={slideCls(1)} aria-hidden={index !== 1}>
        <img
          src="/assets/hero-still-2.jpg"
          alt="Swirl of pale pink cream texture"
          className="hero-slide-img h-full w-full object-cover"
        />
      </div>
      {/* Slide 3 — motion: drifting silk gradient */}
      <div className={slideCls(2)} aria-hidden={index !== 2}>
        <div className="silk-motion h-full w-full" />
      </div>

      {/* overlay copy */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center" style={{ animation: 'fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) both' }}>
          <p className="text-[11px] tracking-luxe text-[hsl(var(--ink))]">ADVANCED SKINCARE. REFINED BY DESIGN.</p>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-wide text-balance md:text-7xl">
            The Art of Elevated Skincare
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
            Born in London. Formulated and manufactured in South Korea. A considered approach to skincare, where
            thoughtful ingredients and everyday rituals come together.
          </p>
          <div className="pointer-events-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="bg-[hsl(var(--ink))] px-10 py-4 text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-80"
            >
              DISCOVER THE COLLECTION
            </Link>
            <Link
              to="/our-philosophy"
              className="border border-[hsl(var(--ink))] px-10 py-4 text-[11px] tracking-luxe-sm transition-colors duration-300 hover:bg-[hsl(var(--ink))] hover:text-white"
            >
              OUR PHILOSOPHY
            </Link>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="inline-flex h-10 w-10 items-center justify-center transition-opacity duration-300 hover:opacity-50"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.25} />
        </button>
        <div className="flex items-center gap-3" role="tablist" aria-label="Slides">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-[3px] transition-all duration-500 ${i === index ? 'w-10 bg-[hsl(var(--ink))]' : 'w-5 bg-[hsl(var(--ink))]/25 hover:bg-[hsl(var(--ink))]/50'}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="inline-flex h-10 w-10 items-center justify-center transition-opacity duration-300 hover:opacity-50"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
        </button>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Introducing SHENERIO */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">INTRODUCING SHENERIO</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.12] md:text-5xl">
              A house built around the art of ritual
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
            <p className="max-w-xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
              SHENERIO represents a contemporary vision of luxury skincare. Founded in London, our brand brings
              together an appreciation for modern beauty, thoughtful ingredient selection and the formulation
              innovation of South Korea.
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
              We believe skincare should be considered in every detail — from the ingredients within each
              formulation to the experience of incorporating it into your daily ritual.
            </p>
            <Link
              to="/our-philosophy"
              className="mt-8 inline-block text-[11px] tracking-luxe-sm underline underline-offset-8 transition-opacity duration-300 hover:opacity-50"
            >
              DISCOVER OUR HOUSE
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Collection */}
      <section className="bg-[hsl(var(--blush-soft))]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <Reveal className="text-center">
            <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE COLLECTION</p>
            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">The Lumiclear Collection</h2>
            <p className="mt-4 text-[15px] text-[hsl(var(--ink-soft))]">A considered approach to everyday radiance.</p>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 120}>
                <Link to={`/product/${p.slug}`} className="group block">
                  <div className="overflow-hidden bg-white">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-normal">{p.name}</h3>
                      <p className="mt-1 text-[13px] text-[hsl(var(--ink-soft))]">{p.descriptor}</p>
                    </div>
                    <span className="pt-1 text-sm">{formatPrice(p.price)}</span>
                  </div>
                  <span className="mt-4 inline-block text-[11px] tracking-luxe-sm underline underline-offset-8 decoration-[hsl(var(--border))] transition-opacity duration-300 group-hover:opacity-50">
                    DISCOVER THE {p.id === 'serum' ? 'SERUM' : 'CREAM'}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulation philosophy */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="order-2 md:order-1 md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/ing-ferment.jpg" alt="Translucent serum drop" className="aspect-square w-full object-cover" loading="lazy" />
              <img src="/assets/ing-botanical.jpg" alt="Botanical ingredients on white stone" className="aspect-square w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="order-1 md:order-2 md:col-span-5 md:col-start-8" delay={120}>
            <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">OUR FORMULATION PHILOSOPHY</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.12] md:text-5xl">
              Thoughtful ingredients. Considered formulations.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
              Our formulations bring together established cosmetic ingredients selected for their roles in
              hydration, brightening and skin barrier care. From niacinamide and tranexamic acid to bifida ferment
              and ceramides, each ingredient contributes to the character of our skincare.
            </p>
            <Link
              to="/formulation"
              className="mt-8 inline-block text-[11px] tracking-luxe-sm underline underline-offset-8 transition-opacity duration-300 hover:opacity-50"
            >
              EXPLORE OUR FORMULATION
            </Link>
          </Reveal>
        </div>
      </section>

      {/* London × South Korea */}
      <section className="border-y border-[hsl(var(--border))]">
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:py-32">
          <Reveal>
            <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">A LONDON VISION. SOUTH KOREAN FORMULATION.</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.15] md:text-5xl text-balance">
              Where London refinement meets Korean innovation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
              SHENERIO was founded in London with a vision to create a distinctive expression of modern luxury
              skincare. Our products are formulated and manufactured in South Korea — a country recognised for its
              significant contribution to contemporary skincare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ritual teaser */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <Reveal className="text-center">
          <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE SHENERIO RITUAL</p>
          <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">Make everyday care a ritual</h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
          {[
            { step: 'STEP 01 — TREAT', p: products[0] },
            { step: 'STEP 02 — NOURISH', p: products[1] },
          ].map(({ step, p }, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <Link to="/the-ritual" className="group block">
                <div className="overflow-hidden bg-[hsl(var(--blush-soft))]">
                  <img
                    src={p.lifestyleImage}
                    alt={p.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-6 text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{step}</p>
                <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <p className="text-[15px] text-[hsl(var(--ink-soft))]">Two considered essentials. One elevated skincare ritual.</p>
          <Link
            to="/the-ritual"
            className="mt-6 inline-block text-[11px] tracking-luxe-sm underline underline-offset-8 transition-opacity duration-300 hover:opacity-50"
          >
            DISCOVER THE RITUAL
          </Link>
        </Reveal>
      </section>

      {/* Journal teaser */}
      <section className="bg-[hsl(var(--blush-soft))]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE JOURNAL</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.12] md:text-5xl">
                A considered perspective on skincare
              </h2>
              <Link
                to="/journal"
                className="mt-8 inline-block text-[11px] tracking-luxe-sm underline underline-offset-8 transition-opacity duration-300 hover:opacity-50"
              >
                EXPLORE THE JOURNAL
              </Link>
            </Reveal>
            <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
              <Link to="/journal" className="group block bg-white p-10 md:p-14">
                <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">FEATURED</p>
                <h3 className="mt-4 font-display text-3xl font-light leading-snug transition-opacity duration-300 group-hover:opacity-60">
                  Niacinamide: an essential ingredient in modern skincare
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
                  Niacinamide, also known as vitamin B3, is one of the most widely recognised ingredients in
                  contemporary skincare. Discover why it features in both Lumiclear formulations.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Closing */}
      <section className="border-t border-[hsl(var(--border))]">
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl font-light md:text-5xl">SHENERIO. The art of elevated skincare.</h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] text-[hsl(var(--ink-soft))]">
              Thoughtful formulation. Contemporary luxury. A more considered skincare ritual.
            </p>
            <Link
              to="/shop"
              className="mt-10 inline-block bg-[hsl(var(--ink))] px-10 py-4 text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-80"
            >
              DISCOVER SHENERIO
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <section className="mx-auto max-w-[760px] px-6 py-24 text-center md:py-32">
      <Reveal>
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">NEWSLETTER</p>
        <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">Stay connected with SHENERIO</h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] text-[hsl(var(--ink-soft))]">
          Discover new collections, skincare insights and selected updates. Be among the first to experience what
          comes next.
        </p>
        {done ? (
          <p className="mx-auto mt-10 max-w-md bg-[hsl(var(--blush-soft))] px-6 py-5 text-sm" role="status">
            Thank you for joining the SHENERIO community. We look forward to sharing what comes next.
          </p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-12 flex-1 border border-[hsl(var(--ink))] bg-transparent px-4 text-sm outline-none placeholder:text-[hsl(var(--ink-soft))] focus-visible:ring-1 focus-visible:ring-[hsl(var(--ink))]"
            />
            <button
              type="submit"
              className="h-12 bg-[hsl(var(--ink))] px-8 text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-80"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-sm text-[hsl(var(--destructive))]" role="alert">{error}</p>}
      </Reveal>
    </section>
  )
}
