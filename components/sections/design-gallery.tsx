'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { EASE_OUT } from '@/components/ui/fade-up'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/utils'
import { APP_URLS, DESIGN_CATEGORIES, DESIGNS, type Design, type DesignCategory } from '@/lib/data'

/** "All" plus every category, in display order. */
type Filter = 'All' | DesignCategory
const FILTERS: Filter[] = ['All', ...DESIGN_CATEGORIES]

/**
 * DesignCard
 * Thumbnail, name, palette swatches and a preview link for one design.
 */
function DesignCard({ design }: { design: Design }) {
  return (
    <article className="group flex flex-col gap-3">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-sand">
        <Image
          src={design.image || '/placeholder.svg'}
          alt={design.alt}
          fill
          // 2 columns on mobile, 4 from lg upward.
          sizes="(min-width: 1024px) 270px, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* Category label; text, not colour, communicates the category */}
        <span className="absolute top-2.5 left-2.5 rounded-full bg-ivory/90 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-forest">
          {design.category}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-xl leading-none font-medium text-forest">{design.name}</h3>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {/* Swatches listed for screen readers by colour name */}
          <ul className="flex -space-x-1" aria-label={`${design.name} palette`}>
            {design.palette.map((swatch) => (
              <li
                key={swatch.hex}
                className="size-4 rounded-full ring-2 ring-ivory"
                style={{ backgroundColor: swatch.hex }}
              >
                <span className="sr-only">{swatch.name}</span>
              </li>
            ))}
          </ul>
          <span className="text-xs text-ink-muted">{design.palette.length} colours</span>
        </div>

        <a
          href={`${APP_URLS.demo}?design=${design.id}`}
          className="inline-flex min-h-12 items-center gap-1.5 self-start text-sm font-medium text-copper underline-offset-4 hover:underline"
        >
          Preview
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only">the {design.name} design</span>
        </a>
      </div>
    </article>
  )
}

/**
 * DesignGallery
 * Filterable grid of invitation designs. Client component for the
 * chip state; images are lazy-loaded by next/image by default.
 */
export function DesignGallery() {
  const [active, setActive] = useState<Filter>('All')

  // Derive the visible list from the active chip.
  const visible = active === 'All' ? DESIGNS : DESIGNS.filter((d) => d.category === active)

  return (
    <section id="designs" aria-labelledby="designs-title" className="bg-sand/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="designs-title"
          eyebrow="The collection"
          title={
            <>
              Designs with a sense of <em className="italic">place</em>
            </>
          }
          description="Drawn from Zimbabwean landscapes, textiles and traditions. Every design adapts to your own colours."
        />

        {/* Filter chips: horizontally scrollable on small screens */}
        <div
          role="group"
          aria-label="Filter designs by style"
          className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {FILTERS.map((filter) => {
            const isActive = filter === active
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                // aria-pressed exposes the toggle state, not just the colour.
                aria-pressed={isActive}
                className={cn(
                  'min-h-12 shrink-0 rounded-full border px-5 text-sm transition-colors duration-300',
                  isActive
                    ? 'border-forest bg-forest text-ivory'
                    : 'border-forest/20 bg-ivory text-forest hover:border-forest/50',
                )}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Polite live region announces how many designs match */}
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'design' : 'designs'}
        </p>

        <motion.ul layout className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((design) => (
              <motion.li
                key={design.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <DesignCard design={design} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </Container>
    </section>
  )
}
