import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { FadeUp } from '@/components/ui/fade-up'
import { LinkButton } from '@/components/ui/link-button'
import { NdebeleDivider } from '@/components/ui/ndebele-divider'
import { APP_URLS, FREE_TRIAL_DAYS } from '@/lib/data'

/**
 * FinalCta
 * Forest green closing band with ivory text and the copper CTA,
 * framed top and bottom by the soft Ndebele-inspired border.
 */
export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-forest text-ivory">
      <NdebeleDivider tone="muted" />
      <Container className="flex flex-col items-center gap-8 py-24 text-center sm:py-28">
        <FadeUp className="flex flex-col items-center gap-6">
          <h2
            id="cta-title"
            className="max-w-3xl font-serif text-4xl leading-[1.05] font-medium text-balance sm:text-6xl"
          >
            Begin your invitation <em className="text-gold italic">tonight</em>
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-pretty text-ivory/80">
            Choose a design, add your details and send your first link before the tea gets cold.
            Free for {FREE_TRIAL_DAYS} days.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <LinkButton href={APP_URLS.signup}>
            Create yours free
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </FadeUp>
      </Container>
    </section>
  )
}
