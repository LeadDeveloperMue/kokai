import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  /** Ivory wordmark for dark backgrounds. */
  onDark?: boolean
}

/**
 * Logo
 * The Kokai wordmark: set in Cormorant with a tiny gold diamond
 * (echoing the Ndebele divider) in place of a dot. Links to the top of the page.
 */
export function Logo({ className, onDark = false }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Kokai, back to top"
      className={cn(
        'inline-flex min-h-12 items-center gap-1.5 font-serif text-3xl font-medium tracking-tight',
        onDark ? 'text-ivory' : 'text-forest',
        className,
      )}
    >
      Kokai
      {/* Rotated square = small gold diamond accent */}
      <span aria-hidden="true" className="mt-2 size-1.5 rotate-45 bg-gold" />
    </a>
  )
}
