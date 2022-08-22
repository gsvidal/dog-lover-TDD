import './Card.css';
import outlinedHeart from '../../assets/icons/outlined-heart.svg';
import filledHeart from '../../assets/icons/filled-heart.svg';
import { useState, useContext } from 'react';
import { PetsContext } from '../../context/PetsContext';

export const Card = (props) => {
  const {
    filteredPets,
    setFilteredPets,
    hasChangedFavorite,
    setHasChangedFavorite,
  } = useContext(PetsContext);

  const { name, phoneNumber, email, image, favorite, index } = props;

  const [isFavorite, setIsFavorite] = useState(favorite);

  const updateFavorite = (indexPet, isFavorite) => {
    const updatedPets = [...filteredPets];
    updatedPets[indexPet].favorite = isFavorite;
    setFilteredPets(updatedPets);
    setHasChangedFavorite(!hasChangedFavorite);
  };

  const toggleFavorite = () => {
    updateFavorite(index, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={image.url}
            alt={image.alt}
            width="170"
            height="130"
          />
          <button onClick={toggleFavorite} className="card__favorite-button">
            {isFavorite ? (
              <img
                src={filledHeart}
                alt="Filled Heart"
                className="card__favorite-icon"
                width="14"
              />
            ) : (
              <img
                src={outlinedHeart}
                alt="Outlined Heart"
                className="card__favorite-icon"
                width="14"
              />
            )}
          </button>
        </figure>
        <div className="card__info">
          <h1 className="card__pet-name">{name}</h1>
          <p className="card__phone-number">{phoneNumber}</p>
          <p className="card__email">{email}</p>
        </div>
      </article>
    </>
  );
};
