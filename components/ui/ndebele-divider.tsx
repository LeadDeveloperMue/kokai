import { useId } from 'react'
import { cn } from '@/lib/utils'

type NdebeleDividerProps = {
  className?: string
  /** Stroke colour of the motif; gold on light sections, softer gold on forest. */
  tone?: 'gold' | 'muted'
}

/**
 * NdebeleDivider
 * A thin, repeating geometric border inspired by Ndebele wall painting:
 * nested diamonds joined by stepped bars. Drawn as a single SVG <pattern>
 * so it costs a few hundred bytes and scales to any width. Decorative only.
 */
export function NdebeleDivider({ className, tone = 'gold' }: NdebeleDividerProps) {
  // Unique id so several dividers on one page never clash.
  const patternId = useId()

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn(
        'block h-4 w-full',
        tone === 'gold' ? 'text-gold' : 'text-gold/50',
        className,
      )}
    >
      <defs>
        {/* One 48x16 tile; userSpaceOnUse keeps the tile size fixed as width grows */}
        <pattern id={patternId} width="48" height="16" patternUnits="userSpaceOnUse">
          {/* Outer diamond outline */}
          <path
            d="M24 1 L38 8 L24 15 L10 8 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Inner solid diamond */}
          <path d="M24 5 L30 8 L24 11 L18 8 Z" fill="currentColor" />
          {/* Stepped connector bars on either side of the diamond */}
          <path
            d="M0 8 H6 V5 H10 M38 8 H42 V11 H48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
