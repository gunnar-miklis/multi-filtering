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
    <div className='filter__results'>
      <Heading>
        Coffees: {filteredCoffees.length}/{totalCoffees}
      </Heading>

      <div className='filter__list'>
        {filteredCoffees.map(({ name, roast, type, flavours, categories, price }) => (
          <div className='filter__item' key={name}>
            <div className='box'>
              <SubHeading>
                {name}, {type}
              </SubHeading>
            </div>

            <div className='box'>
              <p>{flavours.join(', ')}</p>
              <small>{categories.join(', ')}</small>
              <small>{capitalizeFirstLetter(roast)} Roast</small>
            </div>

            <div className='box'>
              <strong>{price} €</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
