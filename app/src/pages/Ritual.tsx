import { Link } from 'react-router'
import Reveal from '@/components/Reveal'
import { products, formatPrice } from '@/data/products'

const MORNING = [
  { step: 'STEP 01', title: 'Cleanse', text: 'Begin with a suitable facial cleanser to prepare your skin.' },
  { step: 'STEP 02', title: 'Treat', text: 'Apply Lumiclear Target Serum to clean skin. Featuring 5% niacinamide and bifida ferment, it provides a lightweight, brightening treatment step.' },
  { step: 'STEP 03', title: 'Moisturise', text: 'Follow with Lumiclear Radiance Cream to help maintain hydration and leave the complexion soft, supple and luminous.' },
  { step: 'STEP 04', title: 'Protect', text: 'Complete your morning routine with a suitable broad-spectrum sunscreen.' },
  { step: 'STEP 05', title: 'Your makeup routine', text: 'Allow your skincare to settle before applying your preferred makeup products — both formulas are makeup-friendly.' },
]

const EVENING = [
  { step: 'STEP 01', title: 'Cleanse', text: 'Remove daily impurities and prepare your skin for the evening ritual.' },
  { step: 'STEP 02', title: 'Treat', text: 'Apply Lumiclear Target Serum to clean, dry skin.' },
  { step: 'STEP 03', title: 'Nourish', text: 'Follow with Lumiclear Radiance Cream to comfort and replenish overnight.' },
]

function RitualBlock({ title, steps }: { title: string; steps: typeof MORNING }) {
  return (
    <div>
      <h2 className="text-[12px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{title}</h2>
      <div className="mt-8 space-y-0 divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
        {steps.map((s) => (
          <div key={s.step} className="grid gap-2 py-6 md:grid-cols-12">
            <span className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))] md:col-span-3">{s.step}</span>
            <h3 className="font-display text-2xl font-light md:col-span-3">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-[hsl(var(--ink-soft))] md:col-span-6">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Ritual() {
  return (
    <div className="pt-16 md:pt-20">
      <header className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE RITUAL</p>
        <h1 className="mt-5 font-display text-5xl font-light leading-[1.1] md:text-6xl text-balance">
          A more considered approach to everyday care
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
          A skincare routine should be easy to understand and enjoyable to maintain. The Lumiclear collection
          introduces two complementary formulations designed to work together within your daily ritual — suitable
          for all skin types.
        </p>
      </header>

      <section className="mx-auto max-w-[1100px] space-y-20 px-6 pb-24 md:pb-32">
        <Reveal>
          <RitualBlock title="MORNING RITUAL" steps={MORNING} />
        </Reveal>
        <Reveal>
          <RitualBlock title="EVENING RITUAL" steps={EVENING} />
        </Reveal>

        <Reveal>
          <div className="bg-[hsl(var(--blush-soft))] p-10 text-center md:p-16">
            <p className="mx-auto max-w-xl font-display text-2xl font-light leading-relaxed md:text-3xl">
              Two carefully selected essentials can form the foundation of a considered daily skincare ritual.
            </p>
            <p className="mt-4 text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">
              SHENERIO. THE ART OF EVERYDAY RITUALS.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <Link to={`/product/${p.slug}`} className="group block">
                <div className="overflow-hidden bg-[hsl(var(--blush-soft))]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <span className="text-sm">{formatPrice(p.price)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
