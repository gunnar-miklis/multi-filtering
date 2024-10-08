import { useState } from 'react';

import '@/app.css';
import FilterPanel from '@/components/filter/FilterPanel/FilterPanel';
import FilterResults from '@/components/filter/FilterResults/FilterResults';

import { coffees, type Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';

const initalHeadingLevel = 1;

function App() {
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(coffees);
  const Heading = getHeadingElement(initalHeadingLevel);

  return (
    <div className='flexRow flexNoWrap box box--bold-border app'>
      <div className='flexCol flexNoWrap gap-md box box--bold-border app__header'>
        <Heading className={`heading-${initalHeadingLevel}`}>Filter Coffee</Heading>

        <p className='text app__description'>
          Welcome to Filter Coffee, your go-to place for filtering coffee... data. This tiny
          application offers a rich blend of filters that lets you grind through a variety of
          Ai-generated fictional coffees. Just like tweaking the ultimate brew, it's all about
          filtering data, pouring over it to reveal the subtle flavours or hidden notes. With Filter
          Coffee, you can brew your perfect blend of coffee, one filter at a time.
        </p>
      </div>

      <div className='flexCol flexNoWrap app__main'>
        <FilterPanel
          headingLevel={initalHeadingLevel + 1}
          initalCoffees={coffees}
          setFilteredCoffees={setFilteredCoffees}
        />

        <FilterResults
          headingLevel={initalHeadingLevel + 1}
          totalCoffees={coffees.length}
          filteredCoffees={filteredCoffees}
        />
      </div>
    </div>
  );
}

export default App;
