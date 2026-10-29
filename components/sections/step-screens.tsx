import { CalendarPlus, Check, MapPin, X } from 'lucide-react'
import type { Step } from '@/lib/data'

/**
 * MiniPhone
 * A small, flat phone frame used to illustrate each "How it works" step.
 * Purely decorative: the step's title and description carry the meaning.
 */
function MiniPhone({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto aspect-[9/14] w-full max-w-[180px] rounded-[1.75rem] border border-forest/15 bg-ivory p-1.5 shadow-[0_20px_40px_-28px_rgba(30,47,39,0.5)]"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-ivory">
        {/* Speaker slot */}
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-forest/15" />
        <div className="flex flex-1 flex-col p-3">{children}</div>
      </div>
    </div>
  )
}

/** Step 1: a chat message containing the guest's personal link preview. */
function LinkScreen() {
  return (
    <div className="mt-auto flex flex-col gap-2">
      <div className="max-w-[90%] self-end rounded-2xl rounded-br-sm bg-sand p-2 text-[0.6rem] leading-snug text-ink">
        Dear Tendai, we would love you there.
        <div className="mt-1.5 overflow-hidden rounded-lg border border-forest/10 bg-ivory">
          <div className="h-8 bg-forest" />
          <p className="px-1.5 py-1 font-serif text-[0.7rem] text-forest">Tatenda &amp; Rufaro</p>
          <p className="truncate px-1.5 pb-1 text-[0.5rem] text-ink-muted">kokai.co.zw/t-r/tendai</p>
        </div>
      </div>
      <p className="self-end text-[0.5rem] text-ink-muted">09:41</p>
    </div>
  )
}

/** Step 2: an open envelope with the card peeking out. */
function EnvelopeScreen() {
  return (
    <div className="relative mt-auto mb-4 h-20">
      <div className="absolute inset-x-1 bottom-0 h-14 rounded bg-[#E6D7BF]" />
      {/* Open flap pointing upward behind the card */}
      <div className="absolute inset-x-1 bottom-14 h-8 bg-[#E1CFB2] [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
      <div className="absolute inset-x-3 bottom-3 flex h-16 flex-col items-center justify-center rounded-sm border border-gold/40 bg-ivory">
        <span className="h-px w-5 bg-gold" />
        <p className="mt-1 font-serif text-[0.7rem] text-forest">T &amp; R</p>
      </div>
      <div className="absolute inset-x-1 bottom-0 h-10 rounded-b bg-sand [clip-path:polygon(0_0,50%_45%,100%_0,100%_100%,0_100%)]" />
    </div>
  )
}

/** Step 3: two RSVP options, the accepted one marked with a check and label. */
function RsvpScreen() {
  return (
    <div className="mt-auto flex flex-col gap-2">
      <p className="text-center font-serif text-sm text-forest">Will you join us?</p>
      <div className="flex items-center justify-center gap-1 rounded-full bg-success px-2 py-1.5 text-[0.6rem] font-medium text-ivory">
        <Check className="size-3" />
        Joyfully attending
      </div>
      <div className="flex items-center justify-center gap-1 rounded-full border border-forest/20 px-2 py-1.5 text-[0.6rem] text-ink-muted">
        <X className="size-3" />
        Regretfully decline
      </div>
    </div>
  )
}

/** Step 4: calendar and directions action rows. */
function CalendarScreen() {
  return (
    <div className="mt-auto flex flex-col gap-2">
      <div className="rounded-lg bg-sand p-2 text-center">
        <p className="text-[0.5rem] tracking-[0.2em] text-gold-deep uppercase">Saturday</p>
        <p className="font-serif text-2xl leading-none text-forest">12</p>
        <p className="text-[0.55rem] text-ink-muted">September 2026</p>
      </div>
      <div className="flex items-center gap-1.5 rounded-md border border-forest/15 px-2 py-1.5 text-[0.6rem] text-forest">
        <CalendarPlus className="size-3 text-copper" />
        Add to calendar
      </div>
      <div className="flex items-center gap-1.5 rounded-md border border-forest/15 px-2 py-1.5 text-[0.6rem] text-forest">
        <MapPin className="size-3 text-copper" />
        Get directions
      </div>
    </div>
  )
}

/** Lookup from step id to its illustration, keeping the section data-driven. */
const SCREENS: Record<Step['id'], () => React.JSX.Element> = {
  link: LinkScreen,
  envelope: EnvelopeScreen,
  rsvp: RsvpScreen,
  calendar: CalendarScreen,
}

/**
 * StepScreen
 * Renders the mini phone illustration that matches a given step.
 */
export function StepScreen({ id }: { id: Step['id'] }) {
  const Screen = SCREENS[id]
  return (
    <MiniPhone>
      <Screen />
    </MiniPhone>
  )
}
