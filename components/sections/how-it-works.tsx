import { Container } from '@/components/ui/container'
import { FadeUp } from '@/components/ui/fade-up'
import { SectionHeading } from '@/components/ui/section-heading'
import { StepScreen } from '@/components/sections/step-screens'
import { STEPS } from '@/lib/data'

/**
 * HowItWorks
 * Four numbered steps, each paired with a small illustrated phone screen.
 * An ordered list keeps the sequence meaningful for assistive tech.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title={
            <>
              From your phone to theirs, <em className="italic">beautifully</em>
            </>
          }
          description="No printing, no couriers, no lost cards. Just a thoughtful invitation that arrives where your guests already are."
        />

        <ol className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <FadeUp key={step.id} as="li" delay={index * 0.08} className="flex flex-col gap-6">
              <div className="rounded-2xl bg-sand px-6 py-8">
                <StepScreen id={step.id} />
              </div>
              <div className="flex flex-col gap-2">
                {/* Zero-padded numeral as an editorial detail */}
                <p className="font-serif text-lg text-gold-deep italic">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-2xl leading-tight font-medium text-forest">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </ol>
      </Container>
    </section>
  )
}
