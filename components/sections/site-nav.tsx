'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Container } from '@/components/ui/container'
import { LinkButton } from '@/components/ui/link-button'
import { Logo } from '@/components/ui/logo'
import { NdebeleDivider } from '@/components/ui/ndebele-divider'
import { APP_URLS, NAV_LINKS } from '@/lib/data'

/**
 * SiteNav
 * Sticky, translucent top navigation. Desktop shows inline links plus
 * "Log in" and the copper CTA; below `md` everything moves into a sheet.
 * Client component only because the mobile sheet needs open/close state.
 */
export function SiteNav() {
  // Controlled so tapping a link can close the sheet before scrolling.
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-ivory/85 backdrop-blur-md supports-[backdrop-filter]:bg-ivory/70">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-18">
        <Logo />

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-12 items-center px-3 text-sm text-ink transition-colors duration-300 hover:text-copper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <LinkButton href={APP_URLS.login} variant="ghost">
            Log in
          </LinkButton>
          <LinkButton href={APP_URLS.signup}>Create yours free</LinkButton>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="-mr-2 inline-flex size-12 items-center justify-center rounded-full text-forest hover:bg-sand md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm gap-0 bg-ivory p-0">
            <div className="flex h-16 items-center px-5">
              <SheetTitle className="font-serif text-3xl font-medium text-forest">Kokai</SheetTitle>
            </div>
            <NdebeleDivider className="opacity-70" />
            <nav aria-label="Mobile" className="px-5 py-6">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="border-b border-forest/10">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-center font-serif text-2xl text-forest"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-5">
              <LinkButton href={APP_URLS.signup} className="w-full">
                Create yours free
              </LinkButton>
              <LinkButton href={APP_URLS.login} variant="outline" className="w-full">
                Log in
              </LinkButton>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
