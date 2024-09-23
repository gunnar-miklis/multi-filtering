import type { Dispatch, SetStateAction } from 'react';

import AvailableFilters from '@/components/filter/FilterPanel/AvailableFilters';
import ActiveFilters from '@/components/filter/FilterPanel/ActiveFilters';
import '@/components/filter/FilterPanel/filter-panel.css';
import type { Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';
import useFilter from '@/hooks/useFilter';

type Props = {
  headingLevel: number;
  initalCoffees: Coffee[];
  setFilteredCoffees: Dispatch<SetStateAction<Coffee[]>>;
};

export default function Filter({ headingLevel, initalCoffees, setFilteredCoffees }: Props) {
  const Heading = getHeadingElement(headingLevel);

  const {
    activeFilters,
    availableFilters,
    addToActiveFilters,
    removeFromActiveFilters,
    resetActiveFilters,
  } = useFilter(initalCoffees, setFilteredCoffees);

  return (
    <div className='flexCol flexNoWrap gap-lg box box--bold-border filter-panel'>
      <Heading className={`heading-${headingLevel}`}>Filter</Heading>

      <div className='flexCol flexNoWrap gap-lg'>
        <ActiveFilters
          headingLevel={headingLevel + 1}
          activeFilters={activeFilters}
          removeFromActiveFilters={removeFromActiveFilters}
          resetActiveFilters={resetActiveFilters}
        />

        <AvailableFilters
          headingLevel={headingLevel + 1}
          availableFilters={availableFilters}
          addToActiveFilters={addToActiveFilters}
        />
      </div>
    </div>
  );
}
