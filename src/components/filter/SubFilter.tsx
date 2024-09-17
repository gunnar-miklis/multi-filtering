import type { Filters } from '@/components/filter/Filter';
import { getHeadingElement } from '@/utils/functions';
import { useState, type Dispatch, type SetStateAction } from 'react';

type Props = {
  headingTitle: string;
  headingLevel: number;
  initalFilters: Filters;
  setActiveFilters: Dispatch<SetStateAction<Filters>>;
};

export default function SubFilter({
  headingTitle,
  headingLevel,
  initalFilters,
  setActiveFilters,
}: Props) {
  const [subFilters, setSubFilters] = useState<Filters>(initalFilters);
  const Heading = getHeadingElement(headingLevel);

  function applyFilter(clickedFilterItem: string) {
    // add to active filters
    setActiveFilters((prev) => [...prev, clickedFilterItem]);

    // remove from local filters
    setSubFilters((prev) => prev.filter((filterItem) => filterItem !== clickedFilterItem));
  }

  return (
    <div className='filter__sub-filters'>
      <Heading>{headingTitle}</Heading>

      <div className='filter__categories'>
        {subFilters.map((item) => (
          <button className='filter__option' onClick={() => applyFilter(item)} key={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
