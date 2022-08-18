import { Filter } from '../Filter/Filter';
import { Cards } from '../Cards/Cards';
import './Pets.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Pets = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const response = await axios.get('http://localhost:4000/pets');
    setPets(response.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="app-container">
      <Filter />
      <Cards pets={pets} />
    </div>
  );
};
