import type { FilterNames, Filters } from '@/types/index';
import '@/components/filter/FilterPanel/filter-panel.css';
import { capitalizeFirstLetter, getHeadingElement } from '@/utils/functions';

type Props = {
  headingLevel: number;
  availableFilters: Filters;
  addToActiveFilters: (filterName: FilterNames, filterValue: string) => void;
};

export default function AvailableFilters({
  headingLevel,
  availableFilters,
  addToActiveFilters,
}: Props) {
  const Heading = getHeadingElement(headingLevel);

  return (
    <>
      {/* display available filters in separated categories */}
      {Object.entries(availableFilters).map(([filterName, filterValues]) => (
        <div className='flexCol flexNoWrap gap-sm filter-panel__category' key={filterName}>
          <Heading className={`heading-${headingLevel}`}>
            {capitalizeFirstLetter(filterName)}
          </Heading>

          <div className='flexRow flexWrap gap-sm filter-panel__options'>
            {filterValues.map((value) => (
              <button
                key={value}
                className='button filter-panel__option'
                onClick={() => addToActiveFilters(filterName as FilterNames, value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
