import type { Coffee } from '@/data/coffee-data';
import { getHeadingElement } from '@/utils/functions';

type Props = { headingLevel: number; filteredCoffees: Coffee[] };

export default function FilterResults({ headingLevel, filteredCoffees }: Props) {
  const Heading = getHeadingElement(headingLevel);
  const SubHeading = getHeadingElement(headingLevel + 1);

  return (
    <div className='filter__results'>
      <Heading>Filter Results</Heading>
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
              <small>{roast[0].toUpperCase() + roast.slice(1)} Roast</small>
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
