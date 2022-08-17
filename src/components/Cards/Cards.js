import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = ({ pets }) => {
  return (
    <div className="cards">
      {pets.map((pet) => (
        <Card {...pet} key={pet.id} />
      ))}
    </div>
  );
};
