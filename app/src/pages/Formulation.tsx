import Reveal from '@/components/Reveal'

const SECTIONS = [
  {
    title: 'Brightening science',
    text: 'At the heart of the Lumiclear collection sits a sophisticated brightening complex: 5% niacinamide, tranexamic acid and 4-butylresorcinol. Working in harmony, these carefully selected actives help diminish the appearance of dark spots and restore a more even, luminous-looking complexion.',
  },
  {
    title: 'Bio-fermented resilience',
    text: 'Bifida ferment filtrate — a bio-fermented ingredient renowned in luxury Korean skincare — helps support skin resilience and maintain a smoother, healthier-looking complexion. The Radiance Cream and Target Serum both draw on this fermentation expertise.',
  },
  {
    title: 'Barrier & hydration',
    text: 'Ceramide NP, pro-vitamin B5 and sodium hyaluronate help replenish essential skin lipids, attract and retain moisture, and support a healthy-looking skin barrier — the foundation of comfortable, luminous skin.',
  },
  {
    title: 'Botanical calm',
    text: 'Bisabolol and selected botanical extracts help calm and comfort the skin, making the brightening experience feel as gentle as it is effective. Every formula is developed with all skin types in mind.',
  },
]

export default function Formulation() {
  return (
    <div className="pt-16 md:pt-20">
      <header className="border-b border-[hsl(var(--border))]">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
          <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">FORMULATION</p>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.1] md:text-6xl text-balance">
            Understanding the ingredients behind your ritual
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
            We believe that understanding the formulation is an important part of the skincare experience. Our
            approach brings together established cosmetic science and Korean formulation innovation, with
            transparent communication at its core.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: '/assets/ing-niacinamide.jpg', label: '5% NIACINAMIDE' },
            { img: '/assets/ing-ferment.jpg', label: 'BIFIDA FERMENT FILTRATE' },
            { img: '/assets/ing-botanical.jpg', label: 'BISABOLOL & BOTANICALS' },
          ].map((x, i) => (
            <Reveal key={x.label} delay={i * 120}>
              <img src={x.img} alt={x.label} className="aspect-square w-full object-cover" loading="lazy" />
              <p className="mt-4 text-center text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">{x.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 pb-24 md:pb-32">
        <div className="divide-y divide-[hsl(var(--border))]">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="grid gap-3 py-10 md:grid-cols-12">
                <h2 className="font-display text-2xl font-light md:col-span-4">{s.title}</h2>
                <p className="text-[15px] leading-relaxed text-[hsl(var(--ink-soft))] md:col-span-8">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 bg-[hsl(var(--blush-soft))] p-10 text-center md:p-14">
          <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">OUR COMMITMENT</p>
          <p className="mx-auto mt-4 max-w-xl font-display text-2xl font-light leading-relaxed">
            Thoughtful ingredients. Responsible communication. A considered approach to everyday skincare.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
