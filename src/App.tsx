import { useState } from 'react';

import '@/styles/app.css';
import Filter from '@/components/filter/Filter';
import FilterResults from '@/components/filter/FilterResults/FilterResults';

import { coffees, type Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';

const initalHeadingLevel = 1;

function App() {
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(coffees);
  const Heading = getHeadingElement(initalHeadingLevel);

  return (
    <div className='app'>
      <div className='app__header'>
        <Heading>Filter Coffee</Heading>

        <p className='app__description'>
          Welcome to Filter Coffee, your go-to place for filtering coffee... data. This site offers
          a rich blend of filters that lets you grind through a variety of fictional coffees. Just
          like tweaking the ultimate brew, it's all about filtering data, pouring over it to reveal
          the subtle flavours or hidden notes. With Filter Coffee, you can brew your perfect blend
          of coffee, one filter at a time.
        </p>
      </div>

      <div className='app__main'>
        <Filter
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
