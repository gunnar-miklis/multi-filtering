import type { Dispatch, SetStateAction } from 'react';
import type { Filters } from '@/components/filter/Filter';
import { getHeadingElement } from '@/utils/functions';

type Props = {
  headingLevel: number;
  activeFilters: Filters;
  setActiveFilters: Dispatch<SetStateAction<Filters>>;
};

export default function ActiveFilters({ headingLevel, activeFilters, setActiveFilters }: Props) {
  function removeFilter(clickedFilterItem: string) {
    // remove from active filters
    setActiveFilters((prev) => prev.filter((filterItem) => filterItem !== clickedFilterItem));

    // add to local filters
    // TODO
  }

  const Heading = getHeadingElement(headingLevel);

  if (!activeFilters.length) return null;
  return (
    <div className='filter__sub-filters filter__sub-filters--active'>
      <Heading>Active Filters</Heading>

      <div className='filter__categories'>
        {activeFilters.map((filter) => (
          <button
            className='filter__option filter__option--active'
            onClick={() => removeFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
