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

/**
 * Returns a new string with the first character uppercased.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalizeFirstLetter(st: string) {
  return st.charAt(0).toUpperCase() + st.slice(1);
}

/**
 * Returns a sorted array of unique values for a given property in the given data array.
 * The values will be flattened if they are arrays and duplicates are removed.
 * The type of the values will be inferred from the type of the property.
 *
 * @param data - The data array to extract values from.
 * @param property - The property name to extract values from.
 * @returns A sorted array of unique values for the given property.
 *
 * @example
 * const coffees = [
 *     {id: 1, name: 'Coffee 1', categories: ['Fair Trade', 'Speciality'], ...},
 *     {id: 2, name: 'Coffee 2', categories: ['Speciality', 'Blend'], ...},
 *     ...
 * ];
 * const categories = getAllValuesFrom(coffees, 'categories'); // => ['Blend', 'Fair Trade', 'Speciality']: Category[]
 */
export function getAllValuesFrom<DataType, KeyType extends keyof DataType>(
  data: DataType[],
  property: KeyType,
) {
  const allValues = data.map((item) => item[property]);
  const flattenedValues = allValues.flat();
  const uniqueValues = Array.from(new Set(flattenedValues));
  const sortedValues = [...uniqueValues].sort();
  return sortedValues;
}
