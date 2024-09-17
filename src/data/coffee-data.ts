type Category = 'Blend' | 'Single Origin' | 'Decaf' | 'Speciality' | 'Fair Trade';
export type Coffee = {
  id: number;
  name: string;
  roast: 'light' | 'medium' | 'dark';
  type: 'Espresso' | 'Filter' | 'Cappuccino' | 'Americano' | 'Latte' | 'Flat White';
  flavours: string[];
  categories: Category[];
  price: number;
};

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Morning Bliss',
    roast: 'light',
    type: 'Filter',
    flavours: ['Citrus', 'Floral', 'Honey'],
    categories: ['Single Origin', 'Speciality'],
    price: 8.99,
  },
  {
    id: 2,
    name: 'Dark Velvet',
    roast: 'dark',
    type: 'Espresso',
    flavours: ['Chocolate', 'Spice', 'Tobacco'],
    categories: ['Blend', 'Fair Trade'],
    price: 10.5,
  },
  {
    id: 3,
    name: 'Mellow Roast',
    roast: 'medium',
    type: 'Latte',
    flavours: ['Caramel', 'Nutty', 'Cocoa'],
    categories: ['Single Origin', 'Speciality'],
    price: 7.99,
  },
  {
    id: 4,
    name: 'Bold Awakening',
    roast: 'dark',
    type: 'Americano',
    flavours: ['Dark Chocolate', 'Earthy', 'Roasted Nuts'],
    categories: ['Blend', 'Fair Trade'],
    price: 9.49,
  },
  {
    id: 5,
    name: 'Sunrise Brew',
    roast: 'light',
    type: 'Cappuccino',
    flavours: ['Berry', 'Citrus', 'Floral'],
    categories: ['Single Origin', 'Speciality'],
    price: 8.29,
  },
  {
    id: 6,
    name: 'Night Owl',
    roast: 'dark',
    type: 'Flat White',
    flavours: ['Molasses', 'Bitter Chocolate', 'Nutmeg'],
    categories: ['Blend', 'Fair Trade'],
    price: 9.89,
  },
  {
    id: 7,
    name: 'Afternoon Delight',
    roast: 'medium',
    type: 'Latte',
    flavours: ['Jasmine', 'Peach', 'Vanilla'],
    categories: ['Single Origin', 'Speciality'],
    price: 12.99,
  },
  {
    id: 8,
    name: 'Decaf Dream',
    roast: 'medium',
    type: 'Filter',
    flavours: ['Hazelnut', 'Vanilla', 'Dried Fruit'],
    categories: ['Decaf', 'Fair Trade'],
    price: 6.79,
  },
  {
    id: 9,
    name: 'Espresso Noir',
    roast: 'dark',
    type: 'Espresso',
    flavours: ['Dark Chocolate', 'Cinnamon', 'Wood'],
    categories: ['Single Origin', 'Speciality', 'Fair Trade'],
    price: 11.29,
  },
  {
    id: 10,
    name: 'Light & Lively',
    roast: 'light',
    type: 'Flat White',
    flavours: ['Tangerine', 'Lime', 'Sugarcane'],
    categories: ['Single Origin', 'Speciality'],
    price: 8.59,
  },
  {
    id: 11,
    name: 'Caramel Harmony',
    roast: 'medium',
    type: 'Cappuccino',
    flavours: ['Caramel', 'Apple', 'Brown Sugar'],
    categories: ['Single Origin', 'Fair Trade'],
    price: 7.49,
  },
  {
    id: 12,
    name: 'Smooth Decaf',
    roast: 'medium',
    type: 'Americano',
    flavours: ['Chocolate', 'Nutty', 'Smooth'],
    categories: ['Decaf', 'Fair Trade'],
    price: 6.99,
  },
  {
    id: 13,
    name: 'Espresso Delight',
    roast: 'medium',
    type: 'Espresso',
    flavours: ['Blueberry', 'Wine', 'Spice'],
    categories: ['Single Origin', 'Speciality'],
    price: 9.99,
  },
  {
    id: 14,
    name: 'Latte Love',
    roast: 'light',
    type: 'Latte',
    flavours: ['Creamy', 'Vanilla', 'Toffee'],
    categories: ['Blend', 'Speciality'],
    price: 11.49,
  },
  {
    id: 15,
    name: 'Fair Trade Favourite',
    roast: 'dark',
    type: 'Filter',
    flavours: ['Cocoa', 'Dried Fruit', 'Almond'],
    categories: ['Fair Trade', 'Blend'],
    price: 7.89,
  },
];

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
 *     {id: 1, name: 'Coffee 1', categories: ['Fair Trade', 'Speciality']},
 *     {id: 2, name: 'Coffee 2', categories: ['Single Origin', 'Speciality']},
 * ];
 * const categories = getAllValuesFrom(coffees, 'categories');
 * // categories will be ['Fair Trade', 'Speciality', 'Single Origin',]
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
