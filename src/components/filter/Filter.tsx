import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

import AvailableFilters from '@/components/filter/AvailableFilters';
import ActiveFilters from '@/components/filter/ActiveFilters';
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
    const filteredCoffees = initalCoffees.filter((coffee) => {
      const totalMatches = Object.keys(activeFilters).map((filterKey) => {
        const filterValues = activeFilters[filterKey as FilterNames];

        // skip if a value of activeFilter is empty.
        if (filterValues.length === 0) return true;
        // else check if the values are matching.
        else {
          const valueMatches = Object.keys(coffee).map((coffeeKey) => {
            const coffeeValues = coffee[coffeeKey as keyof Coffee];

            // type guard: coffeeValues: string | number | string[] | Category[]
            if (Array.isArray(coffeeValues)) {
              return coffeeValues.some((value) => filterValues.includes(value));
            } else if (typeof coffeeValues === 'string') {
              return filterValues.includes(coffeeValues);
            } else {
              return false; // skip: [id: number, name: string, price: number]
            }
          });

          // matches (inclusive) for [id, name, roast, type, flavours, categories, price]: boolean[]
          return valueMatches.some((match) => match === true);
        }
      });

      // matches (exclusive) for [roasts, types, flavours, categories]: boolean[]
      return totalMatches.every((match) => match === true);
    });

    setFilteredCoffees(
      filteredCoffees.length
        ? filteredCoffees.toSorted((a, b) => a.name.localeCompare(b.name))
        : initalCoffees.toSorted((a, b) => a.name.localeCompare(b.name)),
    );
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
    <div className='filter'>
      <Heading>Filter</Heading>

      <div className='filter__categories'>
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
