import { EVENT_TYPES } from '@/lib/data'

/**
 * EventList
 * One run of celebration names separated by small gold diamonds.
 * Rendered twice by EventStrip so the CSS marquee can loop seamlessly.
 */
function EventList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      // The duplicate copy is purely visual, so hide it from screen readers.
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {EVENT_TYPES.map((event) => (
        <li key={event} className="flex items-center">
          <span className="px-6 font-serif text-2xl whitespace-nowrap text-forest italic sm:px-10 sm:text-3xl">
            {event}
          </span>
          <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
        </li>
      ))}
    </ul>
  )
}

/**
 * EventStrip
 * A slow, pure-CSS marquee of the occasions Kokai is made for.
 * No JavaScript; the global reduced-motion rule stops the animation.
 */
export function EventStrip() {
  return (
    <section aria-label="Occasions Kokai is made for" className="overflow-hidden bg-sand py-8">
      {/* Edge fades so words drift in and out softly instead of being cut off */}
      <div className="flex w-max animate-marquee [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:w-full motion-reduce:[mask-image:none]">
        <EventList />
        <EventList hidden />
      </div>
    </section>
  )
}
