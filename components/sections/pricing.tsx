'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { FadeUp } from '@/components/ui/fade-up'
import { LinkButton } from '@/components/ui/link-button'
import { NdebeleDivider } from '@/components/ui/ndebele-divider'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/utils'
import { APP_URLS, FREE_TRIAL_DAYS, PRICING_TIERS, ZIG_PER_USD, type PricingTier } from '@/lib/data'

type Currency = 'USD' | 'ZiG'

/**
 * formatPrice
 * Converts a USD price to the selected currency and formats it.
 * ZiG is rounded to the nearest whole unit since it is a mock rate.
 */
function formatPrice(usd: number, currency: Currency) {
  if (currency === 'USD') return `$${usd}`
  return `ZiG ${Math.round(usd * ZIG_PER_USD).toLocaleString('en-US')}`
}

/**
 * CurrencyToggle
 * Two-option segmented control. Uses aria-pressed buttons so the selected
 * state is announced and also shown with weight + fill, not colour alone.
 */
function CurrencyToggle({
  value,
  onChange,
}: {
  value: Currency
  onChange: (c: Currency) => void
}) {
  return (
    <div
      role="group"
      aria-label="Show prices in"
      className="inline-flex rounded-full border border-forest/15 bg-ivory p-1"
    >
      {(['USD', 'ZiG'] as const).map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={value === c}
          onClick={() => onChange(c)}
          className={cn(
            'min-h-12 min-w-20 rounded-full px-5 text-sm transition-colors duration-300',
            value === c ? 'bg-forest font-medium text-ivory' : 'text-forest hover:bg-sand',
          )}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

/**
 * TierCard
 * One pricing plan on a sand card. The popular tier gets a gold border
 * and a labelled badge so the highlight is not colour-only.
 */
function TierCard({ tier, currency }: { tier: PricingTier; currency: Currency }) {
  return (
    <article
      aria-labelledby={`tier-${tier.id}`}
      className={cn(
        'relative flex h-full flex-col gap-6 rounded-2xl bg-sand p-7 sm:p-8',
        tier.popular ? 'border-2 border-gold shadow-[0_30px_60px_-40px_rgba(30,47,39,0.6)]' : 'border border-forest/10',
      )}
    >
      {tier.popular && (
        <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-forest px-4 py-1 text-xs font-medium tracking-[0.15em] whitespace-nowrap text-ivory uppercase">
          Most popular
        </p>
      )}

      <div className="flex flex-col gap-2">
        <h3 id={`tier-${tier.id}`} className="font-serif text-3xl font-medium text-forest">
          {tier.name}
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted">{tier.tagline}</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-serif text-5xl leading-none text-forest">
          {formatPrice(tier.priceUsd, currency)}
        </p>
        <p className="text-sm text-ink-muted">Once-off, up to 100 guests</p>
      </div>

      <NdebeleDivider className="h-3 opacity-50" />

      <ul className="flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[0.95rem] text-ink">
            <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <LinkButton
        href={`${APP_URLS.signup}?plan=${tier.id}`}
        // Copper stays the single primary colour; only the popular tier uses it.
        variant={tier.popular ? 'primary' : 'outline'}
        className="mt-auto w-full"
      >
        Start with {tier.name}
      </LinkButton>
    </article>
  )
}

/**
 * Pricing
 * Three once-off tiers with a USD / ZiG toggle. Client component only
 * for the currency state.
 */
export function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD')

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-sand/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title={
            <>
              Pay once, with <em className="italic">EcoCash</em>
            </>
          }
          description={`Design and preview free for ${FREE_TRIAL_DAYS} days. When you are ready to send, pay once through Paynow. No subscriptions.`}
        />

        <FadeUp className="mt-10 flex flex-col items-center gap-2">
          <CurrencyToggle value={currency} onChange={setCurrency} />
          {/* Disclose that ZiG figures are indicative */}
          <p className="text-xs text-ink-muted" aria-live="polite">
            {currency === 'ZiG'
              ? `Indicative rate: 1 USD = ${ZIG_PER_USD} ZiG`
              : 'Prices in US dollars'}
          </p>
        </FadeUp>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-3 md:gap-6">
          {PRICING_TIERS.map((tier, index) => (
            <FadeUp key={tier.id} delay={index * 0.08} className="h-full">
              <TierCard tier={tier} currency={currency} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
