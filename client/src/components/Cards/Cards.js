import { useContext } from 'react';
import { Card } from '../Card/Card';
import { PetsContext } from '../../context/PetsContext';
import './Cards.css';

export const Cards = () => {
  const { filteredPets } = useContext(PetsContext);

  return (
    <div className="cards">
      {filteredPets.map((pet, index) => (
        <Card {...pet} key={pet.id} index={index} />
      ))}
    </div>
  );
};
