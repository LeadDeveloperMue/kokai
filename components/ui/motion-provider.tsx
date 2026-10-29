'use client'

import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'

/**
 * MotionProvider
 * Wraps the app in Framer Motion's MotionConfig so every motion component
 * automatically respects the visitor's prefers-reduced-motion setting
 * (transform animations are skipped, opacity fades still apply).
 *
 * It also flips <html data-motion="on"> once React has hydrated. Until then,
 * a CSS rule in globals.css keeps every FadeUp element fully visible, so
 * slow connections (or failed JS) never leave the page blank.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Runs once, right after hydration: scroll-reveal animations may now hide content.
    document.documentElement.dataset.motion = 'on'
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
