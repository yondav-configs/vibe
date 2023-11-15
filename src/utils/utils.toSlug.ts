/**
 * Converts a string to a URL-friendly slug by replacing non-alphanumeric characters with hyphens.
 *
 * @param input - The input string to be converted to a slug.
 * @returns A URL-friendly slug derived from the input string.
 *
 * @example
 * ```typescript
 * const inputString = 'Vibe Moody Blue Dark';
 * const slug = toSlug(inputString);
 * // Result: 'vibe-moody-blue-dark'
 * ```
 */
export function toSlug(input: string): string {
  // Define a regular expression to match non-alphanumeric characters.
  const regex = /[^a-z|A-Z|0-9]/g;

  // Convert the input string to lowercase, remove leading and trailing spaces,
  // and replace non-alphanumeric characters with hyphens.
  return input.toLowerCase().trim().replace(regex, '-');
}
