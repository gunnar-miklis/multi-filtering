import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

import AvailableFilters from '@/components/filter/FilterPanel/AvailableFilters';
import ActiveFilters from '@/components/filter/FilterPanel/ActiveFilters';
import '@/components/filter/filter.css';
import { getAllValuesFrom, type Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';

// SECTION: filter related types
export type FilterNames = 'roasts' | 'types' | 'flavours' | 'categories';
export type Filters = {
  [filterName in FilterNames]: string[];
};
export type HandleFilteringFunction = (
  action: 'ADD_FILTER' | 'REMOVE_FILTER' | 'CLEAR_FILTER',
  filterName: FilterNames | null,
  filterValue: string | null,
) => void;

type Props = {
  headingLevel: number;
  initalCoffees: Coffee[];
  setFilteredCoffees: Dispatch<SetStateAction<Coffee[]>>;
};

export default function Filter({ headingLevel, initalCoffees, setFilteredCoffees }: Props) {
  const Heading = getHeadingElement(headingLevel);

  // SECTION: inital states
  const [activeFilters, setActiveFilters] = useState<Filters>({
    roasts: [],
    types: [],
    flavours: [],
    categories: [],
  });
  const [availableFilters, setAvailableFilters] = useState<Filters>({
    roasts: getAllValuesFrom(initalCoffees, 'roast'),
    types: getAllValuesFrom(initalCoffees, 'type'),
    flavours: getAllValuesFrom(initalCoffees, 'flavours'),
    categories: getAllValuesFrom(initalCoffees, 'categories'),
  });

  // SECTION: filter the initalCoffees-data: include all the coffees which match the values of activeFilters
  useEffect(() => {
    // if activeFilters is empty, set filteredCoffees to initalCoffees
    if (Object.values(activeFilters).every((values) => !values.length)) {
      setFilteredCoffees(initalCoffees);
      return;
    }

    const filteredCoffees = initalCoffees.filter((coffee) => {
      // check if a single coffee matches ALL (every) active filters [roasts, types, flavours, categories]
      return Object.values(activeFilters).every((filterValues) => {
        // if there are no filterValues, ignore/skip this coffee.
        if (filterValues.length === 0) return true;

        // check if the filterValues match ANY (some) of the coffeeValue [id, name, roast, type, flavours, categories, price]
        return Object.entries(coffee).some(([coffeeKey, coffeeValue]) => {
          // ignore/skip these coffeeValues: [id, name, price]
          if (!['roast', 'type', 'flavours', 'categories'].includes(coffeeKey)) {
            return false;
          }

          // type guard: string (roast, type)
          if (typeof coffeeValue === 'string') {
            return filterValues.includes(coffeeValue);
          }

          // type guard: array (flavours, categories)
          if (Array.isArray(coffeeValue)) {
            return coffeeValue.some((value) => filterValues.includes(value));
          }
        });
      });
    });

    // update filteredCoffees and sort them alphabetically by coffee name
    setFilteredCoffees(filteredCoffees.toSorted((a, b) => a.name.localeCompare(b.name)));
  }, [initalCoffees, activeFilters, setFilteredCoffees]);

  // SECTION: add/remove filters from "available filters" to "active filters" and vice versa.
  const handleFiltering: HandleFilteringFunction = (
    action: 'ADD_FILTER' | 'REMOVE_FILTER' | 'CLEAR_FILTER',
    filterName: FilterNames | null,
    filterValue: string | null,
  ) => {
    switch (action) {
      case 'ADD_FILTER':
        {
          if (!filterName || !filterValue) break;

          // add to active filters
          setActiveFilters((prev) => ({
            ...(prev as Filters),
            [filterName]: [...(prev as Filters)[filterName], filterValue],
          }));

          // remove from available filters
          setAvailableFilters((prev) => ({
            ...(prev as Filters),
            [filterName]: [
              ...(prev as Filters)[filterName].filter(
                (availableFilterValue) => availableFilterValue !== filterValue,
              ),
            ],
          }));
        }
        break;
      case 'REMOVE_FILTER':
        {
          if (!filterName || !filterValue) break;

          // remove from active filters
          setActiveFilters((prev) => ({
            ...(prev as Filters),
            [filterName]: [
              ...(prev as Filters)[filterName].filter(
                (availableFilterValue) => availableFilterValue !== filterValue,
              ),
            ],
          }));

          // add to available filters + sort value back into intial position
          setAvailableFilters((prev) => ({
            ...(prev as Filters),
            [filterName]: [...(prev as Filters)[filterName], filterValue].toSorted(),
          }));
        }
        break;
      case 'CLEAR_FILTER':
        {
          // reset to inital values
          setActiveFilters({
            roasts: [],
            types: [],
            flavours: [],
            categories: [],
          });
          setAvailableFilters({
            roasts: getAllValuesFrom(initalCoffees, 'roast'),
            types: getAllValuesFrom(initalCoffees, 'type'),
            flavours: getAllValuesFrom(initalCoffees, 'flavours'),
            categories: getAllValuesFrom(initalCoffees, 'categories'),
          });
        }
        break;
      default:
        return;
    }
  };

  return (
    <div className='flexCol flexNoWrap gap-lg box box--bold-border filter'>
      <Heading className={`heading-${headingLevel}`}>Filter</Heading>

      <div className='flexCol flexNoWrap gap-lg filter-panel'>
        <AvailableFilters
          headingLevel={headingLevel + 1}
          availableFilters={availableFilters}
          handleFiltering={handleFiltering}
        />

        <ActiveFilters
          headingLevel={headingLevel + 1}
          activeFilters={activeFilters}
          handleFiltering={handleFiltering}
        />
      </div>
    </div>
  );
}
