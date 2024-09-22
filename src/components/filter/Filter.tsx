import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

type Props = {
  headingLevel: number;
  initalCoffees: Coffee[];
  setFilteredCoffees: Dispatch<SetStateAction<Coffee[]>>;
};

export default function Filter({ headingLevel, initalCoffees, setFilteredCoffees }: Props) {
  const Heading = getHeadingElement(headingLevel);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

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

  // SECTION: convert search params to activeFilters
  useEffect(() => {
    // get search params from url (e.g. flavours=Berry,Cinnamon,Vanilla&categories=Speciality,Single Origin)
    const searchParams = new URLSearchParams(search);
    if (searchParams.size === 0) return;

    // convert search params to object {flavours: ['Berry', 'Cinnamon', 'Vanilla'], categories: ['Speciality', 'Single Origin']}
    const convertedSearchParams = Object.fromEntries(
      searchParams.entries().map(([key, value]) => [key, value.split(',')]),
    );

    // loop activeFilters:
    // if the filterName (type FilterNames) matches the one from convertedSearchParams, set the values.
    // else set empty array.
    setActiveFilters(
      (prev) =>
        Object.fromEntries(
          Object.keys(prev).map((filterName) => [
            filterName as FilterNames,
            convertedSearchParams[filterName as FilterNames] || [],
          ]),
        ) as Filters,
    );
  }, [search]);

  // FIXME: set url from (selected) active filters
  useEffect(() => {
    // connect selected values for each filter name (flavours => Berry,Cinnamon,Vanilla)
    const selectedFilters = new Map();
    Object.entries(activeFilters).forEach(([filterName, filterValues]) => {
      if (filterValues.length) {
        selectedFilters.set(filterName, filterValues.join(','));
      }
    });
    if (selectedFilters.size === 0) return;

    // connect filter name and values (flavours=Berry,Cinnamon,Vanilla&categories=Speciality,Single Origin)
    const searchParams = Array.from(selectedFilters, ([key, value]) => key + '=' + value).join('&');

    // connect base path with filters (/multi-filtering?flavours=Berry,Cinnamon,Vanilla&categories=Speciality,Single Origin)
    const href = `${pathname}?${searchParams}`;

    navigate(href, {
      replace: true,
      preventScrollReset: true,
    });
  }, [activeFilters, pathname, navigate]);

  // SECTION: add/remove/clear active filters
  function addToActiveFilters(filterName: FilterNames, filterValue: string) {
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

  function removeFromActiveFilters(filterName: FilterNames, filterValue: string) {
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

  function resetActiveFilters() {
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
    navigate(pathname, { replace: true, preventScrollReset: true });
  }

  return (
    <div className='flexCol flexNoWrap gap-lg box box--bold-border filter'>
      <Heading className={`heading-${headingLevel}`}>Filter</Heading>

      <div className='flexCol flexNoWrap gap-lg filter-panel'>
        <AvailableFilters
          headingLevel={headingLevel + 1}
          availableFilters={availableFilters}
          addToActiveFilters={addToActiveFilters}
        />

        <ActiveFilters
          headingLevel={headingLevel + 1}
          activeFilters={activeFilters}
          removeFromActiveFilters={removeFromActiveFilters}
          resetActiveFilters={resetActiveFilters}
        />
      </div>
    </div>
  );
}
