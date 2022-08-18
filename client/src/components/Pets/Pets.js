import { Filter } from '../Filter/Filter';
import { Cards } from '../Cards/Cards';
import './Pets.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Pets = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'any',
    favorite: 'any',
  });

  const fetchPets = async () => {
    const response = await axios.get('http://localhost:4000/pets');
    setPets(response.data);
    setFilteredPets(response.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

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
  }, [filters.gender, filters.favorite, pets]);

  return (
    <div className="app-container">
      <Filter filters={filters} setFilters={setFilters} />
      <Cards pets={filteredPets} setPets={setPets} />
    </div>
  );
};
