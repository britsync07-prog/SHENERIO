import Reveal from '@/components/Reveal'

const FAQS = [
  {
    q: 'What is SHENERIO?',
    a: 'SHENERIO is a London-founded luxury skincare brand inspired by contemporary beauty and South Korean skincare formulation.',
  },
  {
    q: 'Where are SHENERIO products formulated and manufactured?',
    a: 'Our brand is founded in London, United Kingdom. All products are formulated and manufactured in South Korea.',
  },
  {
    q: 'What products are currently available?',
    a: 'The inaugural SHENERIO collection features two products: Lumiclear Target Serum (£26.00) and Lumiclear Radiance Cream (£36.00).',
  },
  {
    q: 'Are SHENERIO products suitable for all skin types?',
    a: 'The Lumiclear collection is developed with all skin types in mind. However, individual skin responses may vary. We recommend reviewing the full ingredient list and performing a patch test before first use.',
  },
  {
    q: 'Are SHENERIO products suitable for women and men?',
    a: 'Yes. SHENERIO is a skincare brand for women and men, designed to complement everyday skincare routines regardless of gender.',
  },
  {
    q: 'Can I wear SHENERIO products under makeup?',
    a: 'Yes. Both Lumiclear formulations are makeup-friendly. Apply the serum first, follow with the cream, and allow your skincare to settle before applying makeup.',
  },
  {
    q: 'Can I use the serum and cream together?',
    a: 'Yes. They are designed to complement one another. Apply Lumiclear Target Serum first, followed by Lumiclear Radiance Cream.',
  },
  {
    q: 'How often should I use the products?',
    a: 'The intended routine is morning and evening. Follow the directions on the product packaging.',
  },
  {
    q: 'Can I use the products on sensitive skin?',
    a: 'Individual skin responses vary. Review the full ingredient list and perform a patch test before first use. If you have a known skin sensitivity, seek appropriate professional advice.',
  },
  {
    q: 'Are SHENERIO products vegan and cruelty-free?',
    a: 'Please contact our team for verified product-specific information and our confirmed animal-testing policy.',
  },
]

export default function Faq() {
  return (
    <div className="pt-16 md:pt-20">
      <header className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">CUSTOMER CARE</p>
        <h1 className="mt-5 font-display text-5xl font-light md:text-6xl">Frequently asked questions</h1>
      </header>

      <section className="mx-auto max-w-[860px] px-6 pb-24 md:pb-32">
        <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 40, 200)}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-normal [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="font-display text-2xl font-light transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div id="shipping" className="scroll-mt-28 border border-[hsl(var(--border))] p-8">
            <h2 className="text-[11px] tracking-luxe-sm">SHIPPING & DELIVERY</h2>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              Complimentary UK delivery on orders over £50. Standard delivery £3.95 (2–4 working days). Orders are
              dispatched from London.
            </p>
          </div>
          <div id="returns" className="scroll-mt-28 border border-[hsl(var(--border))] p-8">
            <h2 className="text-[11px] tracking-luxe-sm">RETURNS & REFUNDS</h2>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              We offer 30-day returns on unopened products. Contact our team with your order number to begin a
              return.
            </p>
          </div>
          <div id="privacy" className="scroll-mt-28 border border-[hsl(var(--border))] p-8">
            <h2 className="text-[11px] tracking-luxe-sm">PRIVACY</h2>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              We respect your privacy. Personal information is used only to fulfil orders and, with your consent,
              to share SHENERIO updates. You may unsubscribe at any time.
            </p>
          </div>
        </div>
        <p id="terms" className="mt-10 scroll-mt-28 text-xs leading-relaxed text-[hsl(var(--ink-soft))]">
          Terms & Conditions: by using this website you agree to our standard terms of sale. Product suitability is
          subject to final assessment; always review the ingredient list before use.
        </p>
      </section>
    </div>
  )
}
