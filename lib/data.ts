/**
 * Typed mock content for the Kokai marketing site.
 * There is no database yet: every section reads its copy from this file,
 * so swapping to a CMS or API later only means replacing these exports.
 */

/* ------------------------------------------------------------------ */
/* Shared types                                                        */
/* ------------------------------------------------------------------ */

/** A simple text link used in the nav and footer. */
export type NavLink = {
  label: string
  href: string
}

/** Filter categories shown as chips in the design gallery. */
export type DesignCategory = 'African' | 'Floral' | 'Modern' | 'Luxury' | 'Christian'

/** A named colour inside an invitation palette (name is used for screen readers). */
export type Swatch = {
  name: string
  hex: string
}

/** One invitation design card in the gallery. */
export type Design = {
  id: string
  name: string
  category: DesignCategory
  image: string
  /** Descriptive alt text for the thumbnail image. */
  alt: string
  palette: Swatch[]
}

/** One step in the "How it works" sequence. */
export type Step = {
  id: 'link' | 'envelope' | 'rsvp' | 'calendar'
  title: string
  description: string
}

/** Icon keys map to lucide icons inside the Features section. */
export type FeatureIcon = 'link' | 'rsvp' | 'countdown' | 'map' | 'gallery' | 'music'

/** One feature card. */
export type Feature = {
  icon: FeatureIcon
  title: string
  description: string
}

/** One pricing tier (prices stored in USD, converted to ZiG at render time). */
export type PricingTier = {
  id: 'essential' | 'classic' | 'premium'
  name: string
  priceUsd: number
  tagline: string
  features: string[]
  popular?: boolean
}

/** One FAQ entry. */
export type Faq = {
  question: string
  answer: string
}

/* ------------------------------------------------------------------ */
/* Global constants                                                    */
/* ------------------------------------------------------------------ */

/**
 * Mock USD -> ZiG exchange rate used by the pricing toggle.
 * Replace with a live rate (e.g. RBZ interbank) once a backend exists.
 */
export const ZIG_PER_USD = 26.8

/** Length of the free trial, referenced in hero and pricing copy. */
export const FREE_TRIAL_DAYS = 7

/** Placeholder app URLs; the product app lives on a separate domain. */
export const APP_URLS = {
  signup: 'https://app.kokai.co.zw/signup',
  login: 'https://app.kokai.co.zw/login',
  demo: 'https://app.kokai.co.zw/i/tatenda-and-rufaro',
} as const

/** WhatsApp contact (international format without "+" as wa.me expects). */
export const WHATSAPP_NUMBER = '263771234567'

/** Pre-filled WhatsApp message so the conversation starts warmly. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Kokai, I would love help with our wedding invitation.',
)}`

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

/** Primary in-page navigation links (anchor targets match section ids). */
export const NAV_LINKS: NavLink[] = [
  { label: 'Designs', href: '#designs' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

/* ------------------------------------------------------------------ */
/* Event strip                                                         */
/* ------------------------------------------------------------------ */

/** Celebrations Kokai is designed for, shown in the slow marquee. */
export const EVENT_TYPES: string[] = [
  'White weddings',
  'Roora',
  'Lobola',
  'Kitchen parties',
  'Engagements',
]

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

/** The four-step guest journey. */
export const STEPS: Step[] = [
  {
    id: 'link',
    title: 'A personal link for every guest',
    description:
      'Each guest receives their own link on WhatsApp or email, greeted by name. No group blasts, no forwarded PDFs.',
  },
  {
    id: 'envelope',
    title: 'It opens like an envelope',
    description:
      'A gentle reveal, just like real stationery. Your names, your date, your colours, set in beautiful type.',
  },
  {
    id: 'rsvp',
    title: 'One-tap RSVP',
    description:
      'Guests reply in a single tap. You watch the list fill up in real time, so catering numbers stop being a guess.',
  },
  {
    id: 'calendar',
    title: 'Calendar and directions',
    description:
      'Add to calendar and open directions to the venue, whether it is a garden in Borrowdale or a church in Bulawayo.',
  },
]

/* ------------------------------------------------------------------ */
/* Design gallery                                                      */
/* ------------------------------------------------------------------ */

/** Chip order for the gallery filter ("All" is handled by the UI). */
export const DESIGN_CATEGORIES: DesignCategory[] = [
  'African',
  'Floral',
  'Modern',
  'Luxury',
  'Christian',
]

/** Eight mock designs, each with a five-colour palette. */
export const DESIGNS: Design[] = [
  {
    id: 'chiedza',
    name: 'Chiedza',
    category: 'African',
    image: '/designs/chiedza.png',
    alt: 'Ivory invitation with a terracotta geometric border and fine gold line',
    palette: [
      { name: 'Terracotta', hex: '#B5532F' },
      { name: 'Ochre', hex: '#C8893A' },
      { name: 'Clay', hex: '#8A4B2E' },
      { name: 'Ivory', hex: '#FAF5EC' },
      { name: 'Gold', hex: '#C99A3E' },
    ],
  },
  {
    id: 'ruva',
    name: 'Ruva',
    category: 'Floral',
    image: '/designs/ruva.png',
    alt: 'Cream invitation framed with watercolour blush proteas',
    palette: [
      { name: 'Blush', hex: '#E7C3B6' },
      { name: 'Dusty rose', hex: '#C48A82' },
      { name: 'Sage', hex: '#9AA88A' },
      { name: 'Cream', hex: '#F6EEE2' },
      { name: 'Cocoa', hex: '#5C4136' },
    ],
  },
  {
    id: 'kariba',
    name: 'Kariba',
    category: 'Modern',
    image: '/designs/kariba.png',
    alt: 'Minimal off-white invitation with a single slate blue band',
    palette: [
      { name: 'Slate blue', hex: '#4E6478' },
      { name: 'Mist', hex: '#C9D3DA' },
      { name: 'Stone', hex: '#D9D3C9' },
      { name: 'Paper', hex: '#F7F5F0' },
      { name: 'Charcoal', hex: '#2E3135' },
    ],
  },
  {
    id: 'nyanga',
    name: 'Nyanga',
    category: 'Luxury',
    image: '/designs/nyanga.png',
    alt: 'Deep emerald invitation with a gold foil art deco frame and wax seal',
    palette: [
      { name: 'Emerald', hex: '#1F4A3A' },
      { name: 'Pine', hex: '#16352A' },
      { name: 'Gold foil', hex: '#C99A3E' },
      { name: 'Champagne', hex: '#E9D9B5' },
      { name: 'Ivory', hex: '#FAF5EC' },
    ],
  },
  {
    id: 'tsitsi',
    name: 'Tsitsi',
    category: 'Christian',
    image: '/designs/tsitsi.png',
    alt: 'Ivory invitation with a soft gold arched window, beside white lilies',
    palette: [
      { name: 'White', hex: '#FDFBF6' },
      { name: 'Linen', hex: '#EEE6D8' },
      { name: 'Olive', hex: '#7D8160' },
      { name: 'Soft gold', hex: '#D2B074' },
      { name: 'Taupe', hex: '#8C7D6D' },
    ],
  },
  {
    id: 'matopos',
    name: 'Matopos',
    category: 'African',
    image: '/designs/matopos.png',
    alt: 'Sand coloured invitation with a bold black and ochre chevron band',
    palette: [
      { name: 'Sand', hex: '#E4D3B6' },
      { name: 'Ochre', hex: '#C98E2E' },
      { name: 'Charcoal', hex: '#2B2724' },
      { name: 'Granite', hex: '#8F877D' },
      { name: 'Bone', hex: '#F5EEE1' },
    ],
  },
  {
    id: 'msasa',
    name: 'Msasa',
    category: 'Floral',
    image: '/designs/msasa.png',
    alt: 'Cream invitation framed by painted msasa leaves in wine, copper and amber',
    palette: [
      { name: 'Wine', hex: '#7A2E2E' },
      { name: 'Copper', hex: '#B5532F' },
      { name: 'Amber', hex: '#D9A04A' },
      { name: 'Leaf', hex: '#6E7448' },
      { name: 'Cream', hex: '#F6EEE2' },
    ],
  },
  {
    id: 'zambezi',
    name: 'Zambezi',
    category: 'Luxury',
    image: '/designs/zambezi.png',
    alt: 'Midnight navy invitation suite with gold foil edges and a gold-lined envelope',
    palette: [
      { name: 'Midnight', hex: '#1C2440' },
      { name: 'Navy', hex: '#2C3961' },
      { name: 'Gold foil', hex: '#C99A3E' },
      { name: 'Marble', hex: '#EFEBE4' },
      { name: 'Silk', hex: '#D8CBB4' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

/** Six core product features. */
export const FEATURES: Feature[] = [
  {
    icon: 'link',
    title: 'Personal guest links',
    description:
      'Every guest is greeted by name. Know exactly who opened their invitation, and when.',
  },
  {
    icon: 'rsvp',
    title: 'RSVP, sorted',
    description:
      'Attending, declining, plus-ones and dietary notes, all collected in one tidy list you can export.',
  },
  {
    icon: 'countdown',
    title: 'Countdown and calendar',
    description:
      'A quiet countdown to the big day, and one tap to save the date to any phone calendar.',
  },
  {
    icon: 'map',
    title: 'Maps to the venue',
    description:
      'Directions to the church, the reception and the after-party, so no one gets lost on the way to Mazowe.',
  },
  {
    icon: 'gallery',
    title: 'Photo gallery',
    description:
      'Share your engagement shoot or your story so far. Images load fast, even on mobile data.',
  },
  {
    icon: 'music',
    title: 'Your song',
    description:
      'Set the mood with the song that means the most to you, playing softly when guests choose.',
  },
]

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

/** Three once-off tiers, each covering up to 100 guests. */
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'essential',
    name: 'Essential',
    priceUsd: 20,
    tagline: 'Everything you need to invite beautifully.',
    features: [
      'Any design from the gallery',
      'Personal links for every guest',
      'One-tap RSVP with live guest list',
      'Calendar and map buttons',
    ],
  },
  {
    id: 'classic',
    name: 'Classic',
    priceUsd: 40,
    tagline: 'The complete invitation most couples choose.',
    popular: true,
    features: [
      'Everything in Essential',
      'Envelope opening animation',
      'Countdown and photo gallery',
      'Your song and custom colours',
      'Plus-ones and dietary notes',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    priceUsd: 80,
    tagline: 'For celebrations with more than one occasion.',
    features: [
      'Everything in Classic',
      'Multiple events (roora, white wedding, reception)',
      'Custom monogram and wording help',
      'Priority WhatsApp support',
      'Thank-you messages after the day',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

/** Six common questions from couples. */
export const FAQS: Faq[] = [
  {
    question: 'How do I pay with EcoCash?',
    answer:
      'When you are ready to send, choose a plan and pay once through Paynow using EcoCash. You will receive a USSD prompt on your phone, approve it, and your invitation is unlocked immediately. No subscriptions, no card required.',
  },
  {
    question: 'Is it really free for 7 days?',
    answer:
      'Yes. Create your invitation, choose a design, add your details and preview everything for 7 days without paying. You only pay when you are happy and ready to send to guests.',
  },
  {
    question: 'How do guests receive their invitation?',
    answer:
      'Each guest gets a personal link that you share on WhatsApp or by email. It opens in any phone browser, so guests do not need to download an app or create an account.',
  },
  {
    question: 'Can I invite guests to roora and the white wedding separately?',
    answer:
      'Absolutely. On Premium you can add multiple events and choose which guests see which. Close family can be invited to roora, while everyone receives the white wedding and reception.',
  },
  {
    question: 'Will it work on older Android phones and slow data?',
    answer:
      'Kokai is built mobile-first and tested on mid-range Android phones. Images are compressed, animations are light, and the invitation stays readable even on a weak connection.',
  },
  {
    question: 'What if I have more than 100 guests?',
    answer:
      'Every plan includes up to 100 guest links. If your list is longer, message us on WhatsApp and we will extend it for your celebration at a small once-off fee.',
  },
]

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

/** Grouped footer link columns. */
export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Designs', href: '#designs' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]
