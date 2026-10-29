import { CalendarClock, Images, Link2, MailCheck, MapPin, Music2, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { FadeUp } from '@/components/ui/fade-up'
import { SectionHeading } from '@/components/ui/section-heading'
import { FEATURES, type FeatureIcon } from '@/lib/data'

/** Maps the data-layer icon keys to lucide components. */
const ICONS: Record<FeatureIcon, LucideIcon> = {
  link: Link2,
  rsvp: MailCheck,
  countdown: CalendarClock,
  map: MapPin,
  gallery: Images,
  music: Music2,
}

/**
 * Features
 * Six quiet feature cards in a responsive grid (1 / 2 / 3 columns).
 */
export function Features() {
  return (
    <section aria-labelledby="features-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow="Everything included"
          title={
            <>
              Thoughtful details, <em className="italic">handled</em>
            </>
          }
          description="The little things that make an invitation feel considered, and save you a hundred WhatsApp replies."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon]
            return (
              <FadeUp
                key={feature.title}
                as="li"
                delay={(index % 3) * 0.08}
                className="flex flex-col gap-4 rounded-2xl border border-forest/10 bg-ivory p-7 sm:p-8"
              >
                {/* Icon in a hairline gold ring */}
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/50 text-forest">
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.5} />
                </span>
                <h3 className="font-serif text-2xl font-medium text-forest">{feature.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-muted">{feature.description}</p>
              </FadeUp>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
