'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE_OUT } from '@/components/ui/fade-up'

/** How long each open/closed state is held before toggling (ms). */
const CYCLE_MS = 4800

/**
 * InvitationPhone
 * A floating phone mockup whose screen shows an envelope that slowly
 * opens and lifts the invitation card out, then closes again.
 * With reduced motion the envelope is simply shown open and still.
 */
export function InvitationPhone() {
  // Respect the OS setting: no looping or floating when reduced motion is on.
  const reduceMotion = useReducedMotion()
  // true = flap open and card lifted out of the envelope.
  const [open, setOpen] = useState(false)

  // Toggle the envelope state on a slow, calm interval.
  useEffect(() => {
    if (reduceMotion) return
    // Short first delay so the opening is visible soon after load.
    const first = window.setTimeout(() => setOpen(true), 900)
    const loop = window.setInterval(() => setOpen((v) => !v), CYCLE_MS)
    return () => {
      window.clearTimeout(first)
      window.clearInterval(loop)
    }
  }, [reduceMotion])

  // Reduced motion always renders the final, readable open state.
  const isOpen = reduceMotion ? true : open

  return (
    <motion.div
      // Gentle vertical float of the whole device.
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
      className="relative w-[260px] sm:w-[290px]"
    >
      {/* Soft gold halo behind the phone */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-gold/15 blur-3xl"
      />

      {/* Phone frame */}
      <div
        role="img"
        aria-label="Phone showing a Kokai invitation for Tatenda and Rufaro opening from an envelope"
        className="relative aspect-[9/19] rounded-[2.75rem] bg-forest p-2.5 shadow-[0_40px_80px_-30px_rgba(30,47,39,0.55)]"
      >
        {/* Screen */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-ivory">
          {/* Notch */}
          <div aria-hidden="true" className="mx-auto mt-2.5 h-5 w-20 rounded-full bg-forest" />

          {/* Personal greeting at the top of the invitation screen */}
          <div className="px-5 pt-6 text-center">
            <p className="text-[0.6rem] tracking-[0.3em] text-gold-deep uppercase">
              Dear Tendai
            </p>
            <p className="mt-1 font-serif text-lg text-forest italic">You are invited</p>
          </div>

          {/* Envelope stage; perspective gives the flap a real 3D hinge */}
          <div className="relative mx-auto mt-auto mb-16 h-36 w-[82%] [perspective:800px]">
            {/* Envelope back panel */}
            <div className="absolute inset-0 rounded-md bg-[#E6D7BF]" />

            {/* Invitation card: sits inside the envelope and lifts out when open */}
            <motion.div
              className="absolute inset-x-3 bottom-2 z-[2] flex h-32 flex-col items-center justify-center gap-1 rounded-sm border border-gold/40 bg-ivory px-3 text-center shadow-sm"
              initial={false}
              animate={{ y: isOpen ? -96 : 0 }}
              transition={{ duration: 1.1, ease: EASE_OUT, delay: isOpen ? 0.7 : 0 }}
            >
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              <p className="font-serif text-xl leading-tight text-forest">
                Tatenda
                <span className="block text-base text-gold-deep italic">and</span>
                Rufaro
              </p>
              <p className="text-[0.6rem] tracking-[0.2em] text-ink-muted uppercase">
                12 . 09 . 2026
              </p>
              <p className="text-[0.6rem] text-ink-muted">Borrowdale, Harare</p>
            </motion.div>

            {/* Front pocket: two side folds and a bottom fold drawn with clip-path */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[3] rounded-md bg-sand [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[3] rounded-md bg-[#EADDC8] [clip-path:polygon(0_100%,50%_48%,100%_100%)]"
            />

            {/* Top flap: hinges from the top edge. It sits above the card while
                closed and drops behind it once fully open (zIndex switch). */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[58%] origin-top bg-[#E1CFB2] [clip-path:polygon(0_0,100%_0,50%_100%)] [backface-visibility:visible]"
              initial={false}
              animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 1 : 4 }}
              transition={{
                rotateX: { duration: 0.9, ease: EASE_OUT, delay: isOpen ? 0 : 0.9 },
                // Instant z-index swap timed with the end/start of the hinge.
                zIndex: { duration: 0, delay: isOpen ? 0.45 : 0.9 },
              }}
            />

            {/* Copper wax seal with monogram; fades away as the flap opens */}
            <motion.div
              aria-hidden="true"
              className="absolute top-[36%] left-1/2 z-[5] flex size-9 -translate-x-1/2 items-center justify-center rounded-full bg-copper font-serif text-xs text-ivory shadow-md ring-2 ring-copper/30"
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: isOpen ? 0 : 1.6 }}
            >
              T&amp;R
            </motion.div>
          </div>

          {/* Mock RSVP button on the invitation screen */}
          <div className="absolute inset-x-5 bottom-6">
            <div className="flex h-10 items-center justify-center rounded-full bg-copper text-xs font-medium tracking-wide text-ivory">
              RSVP in one tap
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
