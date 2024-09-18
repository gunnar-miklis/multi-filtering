import type { FilterNames, Filters, HandleFilteringFunction } from '@/components/filter/Filter';
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
    <div className='filter__category filter__category--active'>
      <Heading>Active Filters</Heading>

      {/* display active filters in just one single block, rather than splitted in several categories*/}
      <div className='filter__options'>
        {Object.entries(activeFilters).map(([filterName, filterValues]) =>
          filterValues.map((value) => (
            <button
              key={value}
              className='filter__option filter__option--active'
              onClick={() => handleFiltering('REMOVE_FILTER', filterName as FilterNames, value)}
            >
              {value}
            </button>
          )),
        )}
      </div>

      {/* reset button */}
      <button
        className='filter__option filter__option--active'
        onClick={() => handleFiltering('CLEAR_FILTER', null, null)}
      >
        Reset
      </button>
    </div>
  );
}
