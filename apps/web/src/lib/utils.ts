/**
 * Combines class names, filtering out falsy values.
 * Usage: cn('base-class', isActive && 'active', className)
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
