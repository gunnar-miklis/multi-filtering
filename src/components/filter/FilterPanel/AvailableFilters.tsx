import type { FilterNames, Filters, HandleFilteringFunction } from '@/components/filter/Filter';
import '@/components/filter/FilterPanel/filter-panel.css';
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
        <div className='flexCol flexNoWrap gap-sm filter-panel__category' key={filterName}>
          <Heading className={`heading-${headingLevel}`}>
            {capitalizeFirstLetter(filterName)}
          </Heading>

          <div className='flexRow flexWrap gap-sm filter-panel__options'>
            {filterValues.map((value) => (
              <button
                key={value}
                className='button filter-panel__option'
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
