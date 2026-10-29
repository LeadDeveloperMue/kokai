import { cn } from '@/lib/utils'
import { FadeUp } from '@/components/ui/fade-up'

type SectionHeadingProps = {
  /** Small uppercase label above the title. */
  eyebrow: string
  /** Main serif heading; pass JSX to include an italic emphasis word. */
  title: React.ReactNode
  /** Optional supporting paragraph. */
  description?: string
  /** id used by the section's aria-labelledby. */
  id: string
  align?: 'left' | 'center'
  /** Switch colours for dark (forest) sections. */
  onDark?: boolean
  className?: string
}

/**
 * SectionHeading
 * Consistent editorial heading block: gold eyebrow with a hairline rule,
 * large Cormorant title and a short DM Sans description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'center',
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <FadeUp
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <p
        className={cn(
          'flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase',
          onDark ? 'text-gold' : 'text-gold-deep',
        )}
      >
        {/* Short gold hairline: a restrained stationery detail */}
        <span aria-hidden="true" className="h-px w-8 bg-gold" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'font-serif text-4xl leading-[1.05] font-medium text-balance sm:text-5xl',
          onDark ? 'text-ivory' : 'text-forest',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-xl text-base leading-relaxed text-pretty sm:text-lg',
            onDark ? 'text-ivory/80' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      )}
    </FadeUp>
  )
}
