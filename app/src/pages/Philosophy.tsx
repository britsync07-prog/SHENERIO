import Reveal from '@/components/Reveal'

const PILLARS = [
  {
    n: '01',
    title: 'Thoughtful formulation',
    text: 'We value considered ingredient selection and the role each ingredient plays in the overall skincare experience.',
  },
  {
    n: '02',
    title: 'Inspired by Korean innovation',
    text: 'Our products are formulated and manufactured in South Korea — a country recognised for its contribution to modern skincare.',
  },
  {
    n: '03',
    title: 'Refined simplicity',
    text: 'We believe skincare should be uncomplicated, purposeful and enjoyable. Every product should have a meaningful place in your daily ritual.',
  },
  {
    n: '04',
    title: 'The beauty of everyday rituals',
    text: 'Caring for your skin should be an experience to look forward to — a moment to pause, reconnect and invest in yourself.',
  },
]

export default function Philosophy() {
  return (
    <div className="pt-16 md:pt-20">
      <header className="bg-[hsl(var(--blush-soft))]">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-32">
          <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">OUR PHILOSOPHY</p>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.1] md:text-6xl text-balance">
            A contemporary vision of luxury skincare
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-[820px] px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-light md:text-4xl">Our story</h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
            <p>
              SHENERIO was founded in London with a vision to create a distinctive expression of modern luxury
              skincare. Inspired by the evolving world of beauty and the innovation of South Korean skincare
              formulation, we believe in bringing together thoughtful ingredients, considered formulations and an
              elevated approach to everyday care.
            </p>
            <p>
              Our products are formulated and manufactured in South Korea, reflecting our appreciation for the
              country's contribution to modern skincare development.
            </p>
            <p>
              Our journey begins with the Lumiclear collection — two skincare essentials that represent our
              approach to modern skincare, designed for women and men and developed with all skin types in mind.
            </p>
            <p>
              As our house evolves, we remain committed to building a considered portfolio of products that
              reflects our vision. We invite you to discover a different perspective on skincare.
            </p>
          </div>
          <p className="mt-10 font-display text-2xl font-light">SHENERIO. A modern expression of elevated care.</p>
        </Reveal>
      </section>

      <section className="border-t border-[hsl(var(--border))]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-light md:text-4xl">Our philosophy</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="border-t border-[hsl(var(--ink))] pt-6">
                  <span className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{p.n}</span>
                  <h3 className="mt-3 font-display text-2xl font-normal">{p.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
