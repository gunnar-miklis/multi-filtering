import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { Dispatch, SetStateAction } from 'react';
import type { Coffee } from '@/data/coffee-data';
import type { FilterNames, Filters } from '@/types';
import { getAllValuesFrom } from '@/data/coffee-data';

export default function useFilter(
  initalCoffees: Coffee[],
  setFilteredCoffees: Dispatch<SetStateAction<Coffee[]>>,
) {
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

  // SECTION: main filter logic
  useEffect(() => {
    // SUB-SECTION #1: if activeFilters is empty, set filteredCoffees to initalCoffees
    if (Object.values(activeFilters).every((values) => !values.length)) {
      setFilteredCoffees(initalCoffees);
      return;
    }

    // SUB-SECTION #2: filter the initalCoffees-data
    // include all the coffees which match the values of activeFilters
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

    // SUB-SECTION #3: narrow down the remaining filter options
    // show ONLY those filters that the user can still choose from, instead of showing ALL options.
    const remainingAvailableFilters = {
      roasts: getAllValuesFrom(filteredCoffees, 'roast'),
      types: getAllValuesFrom(filteredCoffees, 'type'),
      flavours: getAllValuesFrom(filteredCoffees, 'flavours'),
      categories: getAllValuesFrom(filteredCoffees, 'categories'),
    };

    // exlude activeFilters from remainingAvailableFilters
    const narrowedAvailableFilters = Object.fromEntries(
      Object.entries(remainingAvailableFilters).map(([filterName, values]) => {
        const filteredValues = values.filter(
          (value) => !activeFilters[filterName as FilterNames].includes(value),
        );
        return [filterName, filteredValues];
      }),
    ) as Filters;

    // update availableFilters
    setAvailableFilters(narrowedAvailableFilters);
  }, [initalCoffees, activeFilters, setFilteredCoffees]);

  // SECTION: get url search params from url and update activeFilters accordingly
  useEffect(() => {
    // get search params from url (e.g. flavours=Berry,Cinnamon,Vanilla&categories=Speciality,Single Origin)
    const searchParams = new URLSearchParams(search);

    // if there's no filter passed via url, return
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

  // SECTION: set url search params from activeFilters
  useEffect(() => {
    const searchParams = new URLSearchParams();

    // loop over activeFilters:
    // if filters are selected, append a key-value pair to searchParams
    Object.entries(activeFilters).forEach(([filterName, filterValues]) => {
      if (filterValues.length) {
        searchParams.append(filterName, filterValues.join(','));
      }
    });

    // if there's no filter set, return
    if (searchParams.size === 0) return;

    // connect base url with searchParams
    const href = `${pathname}?${searchParams}`;

    // update the browser url
    navigate(href, {
      replace: true,
      preventScrollReset: true,
    });
  }, [activeFilters, pathname, navigate]);

  // SECTION: add/remove/clear active filters
  function addToActiveFilters(filterName: FilterNames, filterValue: string) {
    setActiveFilters((prev) => ({
      ...(prev as Filters),
      [filterName]: [...(prev as Filters)[filterName], filterValue],
    }));
  }

  function removeFromActiveFilters(filterName: FilterNames, filterValue: string) {
    setActiveFilters((prev) => ({
      ...(prev as Filters),
      [filterName]: [
        ...(prev as Filters)[filterName].filter(
          (availableFilterValue) => availableFilterValue !== filterValue,
        ),
      ],
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

  return {
    activeFilters,
    availableFilters,
    addToActiveFilters,
    removeFromActiveFilters,
    resetActiveFilters,
  };
}
