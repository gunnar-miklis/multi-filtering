import type { FilterNames, Filters, HandleFilteringFunction } from '@/components/filter/Filter';
import { capitalizeFirstLetter, getHeadingElement } from '@/utils/functions';

type Props = {
  headingLevel: number;
  availableFilters: Filters;
  handleFiltering: HandleFilteringFunction;
};

export default function AvailableFilters({
  headingLevel,
  availableFilters,
  handleFiltering,
}: Props) {
  const Heading = getHeadingElement(headingLevel);

  return (
    <>
      {/* display available filters in separated categories */}
      {Object.entries(availableFilters).map(([filterName, filterValues]) => (
        <div className='filter__category' key={filterName}>
          <Heading>{capitalizeFirstLetter(filterName)}</Heading>

          <div className='filter__options'>
            {filterValues.map((value) => (
              <button
                key={value}
                className='filter__option'
                onClick={() => handleFiltering('ADD_FILTER', filterName as FilterNames, value)}
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
