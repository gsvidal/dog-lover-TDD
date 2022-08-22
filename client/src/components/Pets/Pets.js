import { Filter } from '../Filter/Filter';
import { Cards } from '../Cards/Cards';
import './Pets.css';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { PetsContext } from '../../context/PetsContext';

export const Pets = () => {
  const { pets, setPets, setFilteredPets, hasChangedFavorite } =
    useContext(PetsContext);
  // const [pets, setPets] = useState([]);
  // const [filteredPets, setFilteredPets] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'any',
    favorite: 'any',
  });

  // const [hasChangedFavorite, setHasChangedFavorite] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('http://localhost:4000/pets');
      setPets(response.data);
      setFilteredPets(response.data);
    };
    fetchPets();
  }, [setPets, setFilteredPets]);

  useEffect(() => {
    let petsFiltered = [...pets];
    if (filters.gender !== 'any') {
      petsFiltered = petsFiltered.filter(
        (pet) => pet.gender === filters.gender
      );
    }
    if (filters.favorite !== 'any') {
      petsFiltered = petsFiltered.filter((pet) => {
        const fav = filters.favorite === 'favorite' ? true : false;
        return pet.favorite === fav;
      });
    }
    setFilteredPets(petsFiltered);
  }, [filters, pets, hasChangedFavorite, setFilteredPets]);

  return (
    <div className="app-container">
      <Filter filters={filters} setFilters={setFilters} />
      <Cards />
    </div>
  );
};
