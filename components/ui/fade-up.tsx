'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/** Shared ease-out curve: quick start, long soft landing. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

type FadeUpProps = {
  children: React.ReactNode
  className?: string
  /** Seconds to wait before animating, used to stagger siblings. */
  delay?: number
  /** Render as a different element for correct semantics (e.g. "li"). */
  as?: 'div' | 'li' | 'article'
}

/**
 * FadeUp
 * A small client island that fades content up as it scrolls into view.
 * It animates only once, uses a 450ms ease-out, and keeps Server Components
 * as the default everywhere else (children can still be server-rendered).
 */
export function FadeUp({ children, className, delay = 0, as = 'div' }: FadeUpProps) {
  // Pick the motion variant of the requested element.
  const Component = motion[as]

  return (
    <Component
      // "fade-up" lets globals.css force visibility until hydration completes.
      className={cn('fade-up', className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Trigger slightly before the element is fully visible, and only once.
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.45, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  )
}
