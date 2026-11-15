import { Link } from 'react-router'
import Reveal from '@/components/Reveal'

const ARTICLES = [
  'The Science of Niacinamide: Understanding Vitamin B3 in Skincare',
  'Hydration Explained: The Role of Glycerin and Hyaluronic Acid',
  'The Art of Moisturising: Understanding Moisturising Ingredients',
  'Inside Korean Skincare: Formulation and Innovation in South Korea',
  'Understanding Squalane: A Closer Look at This Emollient Ingredient',
  'The Role of Panthenol in Modern Skincare',
  'The Modern Skincare Ritual: Building a Consistent Routine',
  'The Importance of Sunscreen: Daily Protection and Skin Health',
  'Serum vs Moisturiser: Understanding Their Different Roles',
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <header className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">THE SHENERIO JOURNAL</p>
        <h1 className="mt-5 font-display text-5xl font-light leading-[1.1] md:text-6xl text-balance">
          A considered perspective on skincare
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
          Skincare knowledge, ingredient education and contemporary perspectives on modern beauty.
        </p>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <Reveal>
          <article className="grid gap-0 border border-[hsl(var(--border))] md:grid-cols-2">
            <img src="/assets/ing-niacinamide.jpg" alt="Niacinamide powder on white ceramic" className="h-full w-full object-cover" />
            <div className="flex flex-col justify-center p-10 md:p-16">
              <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">FEATURED ARTICLE</p>
              <h2 className="mt-4 font-display text-3xl font-light leading-snug md:text-4xl">
                Niacinamide: an essential ingredient in modern skincare
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
                Niacinamide, also known as vitamin B3, is one of the most widely recognised ingredients in
                contemporary skincare. Its versatility makes it a popular inclusion in formulations designed to
                improve the appearance of uneven skin tone and support the skin's moisture barrier. At SHENERIO,
                niacinamide features in both Lumiclear formulations.
              </p>
              <Link
                to="/formulation"
                className="mt-8 inline-block self-start text-[11px] tracking-luxe-sm underline underline-offset-8 transition-opacity duration-300 hover:opacity-50"
              >
                EXPLORE OUR FORMULATION
              </Link>
            </div>
          </article>
        </Reveal>

        <div className="mt-16 grid gap-x-12 md:grid-cols-3">
          {ARTICLES.map((title, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="border-t border-[hsl(var(--ink))] py-6">
                <span className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-xl font-normal leading-snug">{title}</h3>
                <p className="mt-3 text-[13px] text-[hsl(var(--ink-soft))]">Coming soon to the Journal.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
