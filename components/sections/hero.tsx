import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { LinkButton } from '@/components/ui/link-button'
import { NdebeleDivider } from '@/components/ui/ndebele-divider'
import { InvitationPhone } from '@/components/sections/invitation-phone'
import { cn } from '@/lib/utils'
import { APP_URLS, FREE_TRIAL_DAYS } from '@/lib/data'

/**
 * Reveal
 * Server-rendered wrapper that applies the CSS "reveal" entrance with a
 * stagger delay. Used instead of FadeUp above the fold so the headline
 * paints immediately, without waiting for JavaScript.
 */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
}) {
  return (
    <div className={cn('animate-reveal', className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/**
 * Hero
 * Headline, subhead and CTAs on the left; the animated phone mockup
 * (a small client island) on the right. Stacks on mobile with the copy
 * first so the message lands before the visual.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-14 pt-12 pb-20 sm:pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:pt-24 md:pb-28">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-gold-deep uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              Digital stationery, made in Zimbabwe
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="font-serif text-[2.75rem] leading-[1.02] font-medium text-balance text-forest sm:text-6xl lg:text-7xl"
            >
              Your wedding invitation, sent on{' '}
              {/* The single italic gold emphasis word; gold-deep keeps large-text contrast */}
              <em className="font-normal text-gold-deep italic">WhatsApp</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-md text-lg leading-relaxed text-pretty text-ink-muted">
              Beautiful invitations with a personal link for every guest. They open it like an
              envelope and RSVP in one tap, from Harare to Bulawayo to the diaspora.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <LinkButton href={APP_URLS.signup} className="w-full sm:w-auto">
              Create yours free
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={APP_URLS.demo} variant="outline" className="w-full sm:w-auto">
              See a live invitation
            </LinkButton>
          </Reveal>

          <Reveal delay={320}>
            <p className="text-sm text-ink-muted">
              <span className="font-medium text-forest">Free for {FREE_TRIAL_DAYS} days.</span>{' '}
              Pay once with EcoCash.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center md:justify-end">
          <InvitationPhone />
        </Reveal>
      </Container>

      {/* A single, restrained Ndebele-inspired border closing the hero */}
      <NdebeleDivider className="opacity-60" />
    </section>
  )
}
