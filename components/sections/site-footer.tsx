import { MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { LinkButton } from '@/components/ui/link-button'
import { Logo } from '@/components/ui/logo'
import { FOOTER_LINKS, WHATSAPP_URL } from '@/lib/data'

/**
 * SiteFooter
 * Forest footer with brand blurb, WhatsApp contact, link columns and copyright.
 * Continues seamlessly from the FinalCta band above it.
 */
export function SiteFooter() {
  // Rendered on the server, so the year is always current at build/request time.
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-ivory">
      <Container className="border-t border-ivory/10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <Logo onDark />
            <p className="max-w-xs text-sm leading-relaxed text-ivory/75">
              Premium digital wedding invitations for Zimbabwean couples, at home and abroad.
              Made with care in Harare.
            </p>
            <LinkButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
            >
              <MessageCircle aria-hidden="true" />
              Chat with us on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </LinkButton>
          </div>

          {FOOTER_LINKS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
                {group.title}
              </h2>
              <ul className="mt-3 flex flex-col">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-12 items-center text-sm text-ivory/80 transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/10 pt-8 text-xs text-ivory/65 sm:flex-row sm:justify-between">
          <p>&copy; {year} Kokai. All rights reserved.</p>
          <p>Payments securely processed by Paynow.</p>
        </div>
      </Container>
    </footer>
  )
}
