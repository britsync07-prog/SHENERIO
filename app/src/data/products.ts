export interface Product {
  id: string
  slug: string
  name: string
  descriptor: string
  tagline: string
  price: number
  size: string
  image: string
  lifestyleImage: string
  shortDescription: string
  description: string[]
  science: { name: string; text: string }[]
  ingredients: { name: string; image: string; text: string }[]
  benefits: string[]
  howToUse: string[]
  rating: number
  reviewCount: number
  reviews: { name: string; rating: number; title: string; text: string; date: string }[]
}

export const products: Product[] = [
  {
    id: 'serum',
    slug: 'lumiclear-target-serum',
    name: 'Lumiclear Target Serum',
    descriptor: 'Advanced Skin Barrier & Brightening Serum',
    tagline: 'Concentrated science. Exceptional skin luminosity.',
    price: 26,
    size: '30ml / 1.05 fl. oz.',
    image: '/assets/serum-main.jpeg',
    lifestyleImage: '/assets/serum-lifestyle.jpg',
    shortDescription:
      'A luxurious, high-performance serum designed to restore skin vitality, strengthen its natural protective barrier and reveal a smoother, more luminous complexion.',
    description: [
      'A luxurious, high-performance serum designed to restore skin vitality, strengthen its natural protective barrier and reveal a smoother, more luminous complexion.',
      'Powered by 5% Niacinamide and 6.9% Bifida Ferment Filtrate, this intelligent formula combines the benefits of advanced skincare science with deeply nourishing skin-conditioning ingredients.',
      'The carefully balanced formulation works to improve the appearance of uneven skin tone, refine visible texture and support skin resilience.',
      'Ceramide NP and Pro-Vitamin B5 complete the formula, helping replenish essential skin lipids, maintain hydration and leave the complexion feeling supple, comforted and beautifully conditioned.',
    ],
    science: [
      { name: '5% Niacinamide', text: 'Helps visibly refine skin texture, improve the appearance of uneven skin tone, balance excess oil and enhance natural radiance.' },
      { name: '6.9% Bifida Ferment Filtrate', text: 'A high-concentration bio-fermented ingredient associated with premium skin-repair formulations. Helps condition the skin and support its natural resilience.' },
      { name: '4-Butylresorcinol', text: 'An advanced targeted brightening ingredient that helps improve the appearance of dark spots and uneven pigmentation.' },
      { name: 'Bisabolol', text: 'A naturally derived soothing ingredient that helps comfort the skin and reduce the appearance of irritation.' },
      { name: 'Ceramide NP', text: 'An essential skin-identical lipid that helps replenish the skin barrier and maintain moisture.' },
      { name: 'Pro-Vitamin B5 (Panthenol)', text: 'A deeply conditioning ingredient that helps attract and retain moisture, leaving skin feeling soft, hydrated and comfortable.' },
    ],
    ingredients: [
      { name: 'Niacinamide', image: '/assets/ing-niacinamide.jpg', text: 'Vitamin B3 — visibly refines texture and evens skin tone.' },
      { name: 'Bifida Ferment', image: '/assets/ing-ferment.jpg', text: '6.9% bio-fermented filtrate for skin resilience.' },
      { name: 'Bisabolol', image: '/assets/ing-botanical.jpg', text: 'Botanical soothing, gentle on every skin type.' },
    ],
    benefits: ['Suitable for all skin types', 'Makeup-friendly formula', 'Strengthens the skin barrier', 'Improves uneven skin tone', 'Lightweight, fast-absorbing'],
    howToUse: [
      'Begin with freshly cleansed skin.',
      'Apply 2–3 drops to the face and neck, morning and evening.',
      'Gently press into the skin and allow to settle.',
      'Follow with Lumiclear Radiance Cream.',
    ],
    rating: 4.8,
    reviewCount: 24,
    reviews: [
      { name: 'Amelia R.', rating: 5, title: 'Beautiful texture', text: 'Absorbs instantly and layers perfectly under makeup. My skin feels noticeably smoother after two weeks.', date: 'November 2026' },
      { name: 'Priya K.', rating: 5, title: 'Gentle but effective', text: 'I have sensitive skin and this caused no irritation at all. Lovely glow in the mornings.', date: 'November 2026' },
      { name: 'Sofia M.', rating: 4, title: 'Elegant and light', text: 'The packaging is stunning and the serum itself feels very refined. Will repurchase.', date: 'October 2026' },
    ],
  },
  {
    id: 'cream',
    slug: 'lumiclear-radiance-cream',
    name: 'Lumiclear Radiance Cream',
    descriptor: 'Advanced Brightening & Skin Renewal Cream',
    tagline: 'Hyperpigmentation | Uneven Skin Tone | Dull Skin',
    price: 36,
    size: '50g / 1.76 fl. oz.',
    image: '/assets/cream-main.jpeg',
    lifestyleImage: '/assets/cream-lifestyle.jpg',
    shortDescription:
      'Created to target the visible signs of uneven skin tone, dullness and discolouration, this advanced brightening cream brings together high-performance actives and soothing botanical ingredients.',
    description: [
      'A new expression of luminous, beautifully balanced skin.',
      'Created to target the visible signs of uneven skin tone, dullness and discolouration, this advanced brightening cream brings together high-performance actives and soothing botanical ingredients to reveal a smoother, more radiant-looking complexion.',
      'At its heart is a sophisticated combination of 5% Niacinamide, Bifida Ferment Filtrate, Tranexamic Acid and 4-Butylresorcinol. Working in harmony, these carefully selected ingredients help diminish the appearance of dark spots, refine skin texture and restore a more even, luminous-looking complexion.',
      'Balanced with Bisabolol and botanical extracts, the formula helps comfort and soothe the skin while supporting a healthy-looking skin barrier.',
    ],
    science: [
      { name: '5% Niacinamide', text: 'A clinically recognised skin-conditioning ingredient that helps visibly improve uneven skin tone, minimise the appearance of blemishes and enhance overall luminosity.' },
      { name: 'Bifida Ferment Filtrate', text: 'A sophisticated bio-fermented ingredient renowned in luxury skincare for its skin-conditioning properties. Helps support skin resilience and maintain a smoother, healthier-looking complexion.' },
      { name: 'Tranexamic Acid', text: 'A targeted brightening active that helps reduce the appearance of stubborn dark spots and uneven pigmentation for a more uniform-looking skin tone.' },
      { name: '4-Butylresorcinol', text: 'An advanced brightening ingredient selected for its targeted approach to visible discolouration and dark spots.' },
      { name: 'Bisabolol & Botanical Extracts', text: 'A soothing combination that helps calm and comfort the skin, making the brightening experience feel as gentle as it is effective.' },
    ],
    ingredients: [
      { name: 'Niacinamide', image: '/assets/ing-niacinamide.jpg', text: '5% Vitamin B3 — the brightening cornerstone.' },
      { name: 'Tranexamic Acid', image: '/assets/ing-ferment.jpg', text: 'Targets stubborn dark spots and pigmentation.' },
      { name: 'Bisabolol', image: '/assets/ing-botanical.jpg', text: 'Botanical calm for a gentle brightening ritual.' },
    ],
    benefits: ['Suitable for all skin types', 'Makeup-friendly formula', 'Diminishes the look of dark spots', 'Restores luminous, even tone', 'Comforts and soothes'],
    howToUse: [
      'Cleanse your face and apply Lumiclear Target Serum.',
      'Follow with an appropriate amount of Radiance Cream.',
      'Gently massage over the face and neck until absorbed.',
      'Allow the cream to settle before makeup application.',
    ],
    rating: 4.9,
    reviewCount: 31,
    reviews: [
      { name: 'Charlotte E.', rating: 5, title: 'My skin looks lit from within', text: 'Three weeks in and my dark spots are visibly softer. The cream feels incredibly luxurious.', date: 'November 2026' },
      { name: 'Hana T.', rating: 5, title: 'Perfect under makeup', text: 'No pilling, no heaviness — just a smooth, hydrated base. Exactly what I wanted.', date: 'November 2026' },
      { name: 'Danielle W.', rating: 5, title: 'Worth every penny', text: 'Elegant packaging, beautiful formula. My complexion looks more even and calm.', date: 'October 2026' },
    ],
  },
]

export const formatPrice = (n: number) => `£${n.toFixed(2)}`
