import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

import SubFilter from '@/components/filter/SubFilter';
import '@/components/filter/filter.css';
import { getAllValuesFrom, type Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';
import ActiveFilters from './ActiveFilters';

export type Filters = string[];

type Props = {
  headingLevel: number;
  initalCoffees: Coffee[];
  setFilteredCoffees: Dispatch<SetStateAction<Coffee[]>>;
};

export default function Filter({ headingLevel, initalCoffees, setFilteredCoffees }: Props) {
  const [activeFilters, setActiveFilters] = useState<Filters>([]);

  useEffect(() => {
    console.log('activeFilters :>> ', activeFilters); // FIXME: here it is not empty!
    setFilteredCoffees((prev) =>
      prev.filter((coffee) => {
        const result = Object.keys(coffee)
          .map((key) => {
            if (key === 'roast' || key === 'type' || key === 'flavours' || key === 'categories') {
              if (typeof coffee[key] === 'string') {
                console.log('activeFilters :>> ', activeFilters); // FIXME: but here it is empty, wat?
                console.log('coffee[key] :>> ', coffee[key]);
                return activeFilters.includes(coffee[key]);
              }
              if (Array.isArray(coffee[key])) {
                return coffee[key].some((item) => activeFilters.includes(item));
              }
            } else return false;
          })
          .includes(true);
        return result;
      }),
    );
  }, [activeFilters, setFilteredCoffees]);

  const Heading = getHeadingElement(headingLevel);

  const coffeeRoast = getAllValuesFrom(initalCoffees, 'roast');
  const coffeeType = getAllValuesFrom(initalCoffees, 'type');
  const coffeeFlavours = getAllValuesFrom(initalCoffees, 'flavours');
  const coffeeCategories = getAllValuesFrom(initalCoffees, 'categories');

  return (
    <div className='filter'>
      <Heading>Filters</Heading>

      <ActiveFilters
        headingLevel={headingLevel + 1}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      <SubFilter
        headingTitle='Roast'
        headingLevel={headingLevel + 1}
        initalFilters={coffeeRoast}
        setActiveFilters={setActiveFilters}
      />
      <SubFilter
        headingTitle='Type'
        headingLevel={headingLevel + 1}
        initalFilters={coffeeType}
        setActiveFilters={setActiveFilters}
      />
      <SubFilter
        headingTitle='Flavours'
        headingLevel={headingLevel + 1}
        initalFilters={coffeeFlavours}
        setActiveFilters={setActiveFilters}
      />
      <SubFilter
        headingTitle='Categories'
        headingLevel={headingLevel + 1}
        initalFilters={coffeeCategories}
        setActiveFilters={setActiveFilters}
      />
    </div>
  );
}
