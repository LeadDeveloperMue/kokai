import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Brand button styles for anchor elements.
 * Every size is at least 48px tall to meet the mobile tap-target requirement.
 * Copper is reserved for the single primary action; others stay quiet.
 */
export const linkButtonVariants = cva(
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ease-out [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        /** The one primary action colour: copper with ivory text (~4.6:1). */
        primary: 'bg-copper text-ivory hover:bg-copper-hover',
        /** Hairline outline for secondary actions on light backgrounds. */
        outline: 'border border-forest/25 text-forest hover:border-forest/60 hover:bg-sand/60',
        /** Hairline outline for secondary actions on forest backgrounds. */
        outlineLight: 'border border-ivory/30 text-ivory hover:border-ivory/70 hover:bg-ivory/5',
        /** Text-only link styled as a button (e.g. "Log in"). */
        ghost: 'px-4 text-forest hover:bg-sand/70',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

type LinkButtonProps = React.ComponentProps<'a'> & VariantProps<typeof linkButtonVariants>

/**
 * LinkButton
 * A server-friendly anchor that looks like a button. Use it for navigation
 * (sign up, anchors, WhatsApp) where a real <a> is the correct semantic.
 */
export function LinkButton({ className, variant, ...props }: LinkButtonProps) {
  return <a className={cn(linkButtonVariants({ variant }), className)} {...props} />
}
