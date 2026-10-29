import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { MotionProvider } from '@/components/ui/motion-provider'
import './globals.css'

/** Display serif for headings and italic emphasis words (latin subset only). */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

/** Clean sans-serif for body copy and UI (variable font, latin subset only). */
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

/** SEO metadata for the landing page. */
export const metadata: Metadata = {
  title: 'Kokai | Digital wedding invitations for Zimbabwe',
  description:
    'Beautiful digital wedding invitations sent on WhatsApp. Personal links for every guest, one-tap RSVP, maps and countdowns. Pay once with EcoCash.',
  keywords: [
    'digital wedding invitation Zimbabwe',
    'WhatsApp wedding invitation',
    'roora invitation',
    'EcoCash',
    'Harare wedding',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Kokai | Your wedding invitation, sent on WhatsApp',
    description: 'Premium digital wedding invitations for Zimbabwean couples.',
    type: 'website',
    locale: 'en_ZW',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

/** Viewport: ivory browser chrome on mobile; zoom stays enabled for accessibility. */
export const viewport: Viewport = {
  themeColor: '#FAF5EC',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

/** Root layout: wires fonts, global styles and the reduced-motion aware motion config. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} bg-ivory`}>
      {/* Browser extensions (e.g. Grammarly) inject attributes on <body>; ignore only that diff */}
      <body suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
        {/* Analytics only ships in production builds */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
