import { DesignGallery } from '@/components/sections/design-gallery'
import { EventStrip } from '@/components/sections/event-strip'
import { Faq } from '@/components/sections/faq'
import { Features } from '@/components/sections/features'
import { FinalCta } from '@/components/sections/final-cta'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Pricing } from '@/components/sections/pricing'
import { SiteFooter } from '@/components/sections/site-footer'
import { SiteNav } from '@/components/sections/site-nav'

/**
 * Home
 * The single Kokai landing page. A Server Component that composes each
 * section in order; only the pieces that need state are client islands.
 */
export default function Home() {
  return (
    <>
      {/* Skip link lets keyboard users jump past the navigation */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      {/* Anchor target used by the logo's "back to top" link */}
      <div id="top" />
      <SiteNav />
      <main id="main">
        <Hero />
        <EventStrip />
        <HowItWorks />
        <DesignGallery />
        <Features />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
