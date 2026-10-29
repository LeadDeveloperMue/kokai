import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Container } from '@/components/ui/container'
import { FadeUp } from '@/components/ui/fade-up'
import { SectionHeading } from '@/components/ui/section-heading'
import { FAQS } from '@/lib/data'

/**
 * Faq
 * Six common questions in a shadcn Accordion. Triggers are enlarged
 * to comfortable 56px+ tap targets with serif question text.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          id="faq-title"
          eyebrow="Questions"
          title={
            <>
              Asked, and <em className="italic">answered</em>
            </>
          }
        />

        <FadeUp className="mt-14">
          <Accordion className="border-t border-forest/15">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-b border-forest/15">
                <AccordionTrigger className="min-h-14 items-center rounded-none py-5 font-serif text-xl font-medium text-forest hover:no-underline focus-visible:ring-0 sm:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-ink-muted">
                  <p className="max-w-2xl">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </Container>
    </section>
  )
}
