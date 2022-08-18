import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = (props) => {
  const { pets, setPets } = props;

  const updateFavorite = (indexPet, favorite) => {
    const updatedPets = [...pets];
    updatedPets[indexPet].favorite = favorite;
    setPets(updatedPets);
  };

  return (
    <div className="cards">
      {pets.map((pet, index) => (
        <Card
          {...pet}
          key={pet.id}
          updateFavorite={updateFavorite}
          index={index}
        />
      ))}
    </div>
  );
};
