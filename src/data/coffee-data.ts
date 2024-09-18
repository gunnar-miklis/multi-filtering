export type Category = 'Blend' | 'Single Origin' | 'Decaf' | 'Speciality' | 'Fair Trade';
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
    flavours: ['Citrus', 'Floral'],
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
    flavours: ['Dried Fruit', 'Almond'],
    categories: ['Fair Trade', 'Blend'],
    price: 7.89,
  },
  {
    id: 16,
    name: 'Mystic Mocha',
    roast: 'medium',
    type: 'Cappuccino',
    flavours: ['Mocha', 'Cinnamon', 'Cream'],
    categories: ['Blend', 'Speciality'],
    price: 10.49,
  },
  {
    id: 17,
    name: 'Ginger Spice Latte',
    roast: 'light',
    type: 'Latte',
    flavours: ['Ginger', 'Spice', 'Vanilla'],
    categories: ['Single Origin', 'Speciality'],
    price: 11.99,
  },
  {
    id: 19,
    name: 'Velvet Smooth',
    roast: 'medium',
    type: 'Flat White',
    flavours: ['Velvet', 'Berry', 'Nutmeg'],
    categories: ['Single Origin', 'Speciality'],
    price: 12.79,
  },
  {
    id: 22,
    name: 'Espresso Elegance',
    roast: 'dark',
    type: 'Espresso',
    flavours: ['Smoky', 'Cherry', 'Spice'],
    categories: ['Blend', 'Fair Trade'],
    price: 11.79,
  },
  {
    id: 23,
    name: 'Morning Joy',
    roast: 'light',
    type: 'Filter',
    flavours: ['Peach', 'Citrus', 'Honey'],
    categories: ['Single Origin', 'Speciality'],
    price: 7.99,
  },
  {
    id: 25,
    name: 'Autumn Spice',
    roast: 'dark',
    type: 'Americano',
    flavours: ['Pumpkin', 'Spice', 'Maple'],
    categories: ['Blend', 'Speciality'],
    price: 9.99,
  },
  {
    id: 26,
    name: 'Sweet Harmony',
    roast: 'light',
    type: 'Flat White',
    flavours: ['Honey', 'Vanilla', 'Almond'],
    categories: ['Single Origin', 'Speciality'],
    price: 11.29,
  },
  {
    id: 27,
    name: 'Hazelnut Heaven',
    roast: 'medium',
    type: 'Espresso',
    flavours: ['Hazelnut', 'Chocolate', 'Coffee'],
    categories: ['Blend', 'Fair Trade'],
    price: 10.99,
  },
  {
    id: 28,
    name: 'Frosty Brew',
    roast: 'medium',
    type: 'Filter',
    flavours: ['Mint', 'Chocolate', 'Caramel'],
    categories: ['Single Origin', 'Speciality'],
    price: 8.99,
  },
  {
    id: 31,
    name: 'Spiced Citrus',
    roast: 'medium',
    type: 'Americano',
    flavours: ['Spice', 'Nutty', 'Citrus'],
    categories: ['Decaf', 'Fair Trade'],
    price: 7.49,
  },
  {
    id: 32,
    name: 'Creamy Caramel',
    roast: 'light',
    type: 'Latte',
    flavours: ['Caramel', 'Cream', 'Vanilla'],
    categories: ['Blend', 'Speciality'],
    price: 14.29,
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
 *     {id: 1, name: 'Coffee 1', categories: ['Fair Trade', 'Speciality'], ...},
 *     {id: 2, name: 'Coffee 2', categories: ['Speciality', 'Blend'], ...},
 *     ...
 * ];
 * const categories = getAllValuesFrom(coffees, 'categories'); // => ['Blend', 'Fair Trade', 'Speciality']: Categories[]
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
