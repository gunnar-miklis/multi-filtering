import type { FilterNames, Filters, HandleFilteringFunction } from '@/components/filter/Filter';
import '@/components/filter/FilterPanel/filter-panel.css';
import { getHeadingElement } from '@/utils/functions';

type Props = {
  headingLevel: number;
  activeFilters: Filters;
  handleFiltering: HandleFilteringFunction;
};

export default function ActiveFilters({ headingLevel, activeFilters, handleFiltering }: Props) {
  const Heading = getHeadingElement(headingLevel);

  // if empty don't display this component
  if (Object.values(activeFilters).every((values) => !values.length)) return null;
  return (
    <div className='flexCol flexNoWrap gap-sm filter__category filter-panel__category--active'>
      <Heading className={`heading-${headingLevel}`}>Active Filters</Heading>

      {/* display active filters in just one single block, rather than splitted in several categories*/}
      <div className='flexRow flexWrap gap-sm filter-panel__options'>
        {Object.entries(activeFilters).map(([filterName, filterValues]) =>
          filterValues.map((value) => (
            <button
              key={value}
              className='button filter-panel__option filter-panel__option--active'
              onClick={() => handleFiltering('REMOVE_FILTER', filterName as FilterNames, value)}
            >
              {value}
            </button>
          )),
        )}
      </div>

      {/* reset button */}
      <button
        className='button filter-panel__option filter-panel__option--active'
        onClick={() => handleFiltering('CLEAR_FILTER', null, null)}
      >
        Reset
      </button>
    </div>
  );
}
