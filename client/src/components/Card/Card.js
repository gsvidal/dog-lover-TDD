import './Card.css';
import outlinedHeart from '../../assets/icons/outlined-heart.svg';
import filledHeart from '../../assets/icons/filled-heart.svg';
import { useState } from 'react';

export const Card = (props) => {
  const { name, phoneNumber, email, image, favorite, index, updateFavorite } =
    props;

  const [isFavorite, setIsFavorite] = useState(favorite);

  const toggleFavorite = () => {
    updateFavorite(index, !isFavorite);
    setIsFavorite((isFavorite) => !isFavorite);
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
            <img
              src={isFavorite ? filledHeart : outlinedHeart}
              alt={isFavorite ? 'Filled Heart' : 'Outlined Heart'}
              className="card__favorite-icon"
              width="14"
            />
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
