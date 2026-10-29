import { cn } from '@/lib/utils'

/**
 * Container
 * Shared max-width wrapper with generous mobile-first side padding.
 */
export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
}
