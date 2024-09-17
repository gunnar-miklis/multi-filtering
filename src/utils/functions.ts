import type { ElementType } from 'react';

/**
 * Returns a React heading element based on given heading level.
 *
 * @param {number} level - The heading level (1-6).
 * @returns {ElementType} The corresponding ElementType (h1-h6).
 * @throws {Error} If the heading level is not between 1 and 6.
 */
export function getHeadingElement(level: number) {
  if (level > 0 && level <= 6) {
    return `h${level}` as ElementType;
  } else {
    throw new Error('Heading Level must be between 1-6');
  }
}
