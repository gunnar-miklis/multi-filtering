import { useState } from 'react';

import '@/styles/app.css';
import Filter from '@/components/filter/Filter';
import FilterResults from '@/components/filter/FilterResults';

import { coffees, type Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';

const headingLevel = 1;

function App() {
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(coffees);
  const Heading = getHeadingElement(headingLevel);

  return (
    <div className='app'>
      <div className='app__header'>
        <Heading>Filter Coffee</Heading>

        <p>
          At Filter Coffee, we're all about hitting the right notes, whether it's a smooth blend of
          code or the perfect roast. As we grind through these lines, we stay grounded, pouring over
          every detail until we filter out the bugs. It's not just about speed - sometimes it's a
          light roast of tweaking, sometimes it's a double shot of espresso-fueled creativity. Every
          feature we build is like brewing a fresh pot - carefully crafted, tested, and refined. So,
          whether you're in for a light or medium roast of coding challenges, remember, finding that
          perfect blend is what keeps us brewing!
        </p>
      </div>

      <Filter
        headingLevel={headingLevel + 1}
        initalCoffees={coffees}
        setFilteredCoffees={setFilteredCoffees}
      />

      <FilterResults headingLevel={headingLevel + 1} filteredCoffees={filteredCoffees} />
    </div>
  );
}

export default App;
