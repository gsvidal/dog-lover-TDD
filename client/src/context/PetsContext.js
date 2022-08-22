import { useState, createContext } from 'react';

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [hasChangedFavorite, setHasChangedFavorite] = useState(false);
  return (
    <PetsContext.Provider
      value={{
        pets,
        filteredPets,
        setPets,
        setFilteredPets,
        hasChangedFavorite,
        setHasChangedFavorite,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
