import '@/components/filter/FilterResults/filter-results.css';
import type { Coffee } from '@/data/coffee-data';
import { capitalizeFirstLetter, getHeadingElement } from '@/utils/functions';

type Props = {
  headingLevel: number;
  totalCoffees: number;
  filteredCoffees: Coffee[];
};

export default function FilterResults({ headingLevel, totalCoffees, filteredCoffees }: Props) {
  const Heading = getHeadingElement(headingLevel);
  const SubHeading = getHeadingElement(headingLevel + 1);

  return (
    <div className='flexCol flexNoWrap gap-lg box box--bold-border filter-results'>
      <Heading className={`heading-${headingLevel}`}>
        Coffees: {filteredCoffees.length}/{totalCoffees}
      </Heading>

      <div className='flexRow flexWrap gap-lg filter-results__list'>
        {filteredCoffees.map(({ name, roast, type, flavours, categories, price }) => (
          <div className='flexCol flexNoWrap box filter-results__item' key={name}>
            <div className='box box--full-height'>
              <SubHeading className={`heading-${headingLevel + 1}`}>
                {name}, {type}
              </SubHeading>
            </div>

            <div className='box box--full-height'>
              <p className='text'>{flavours.join(', ')}</p>
              <small className='small'>{categories.join(', ')}</small>
              <small className='small'>{capitalizeFirstLetter(roast)} Roast</small>
            </div>

            <div className='box box--full-height'>
              <strong className='strong'>{price} €</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
