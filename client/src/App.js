import './App.css';
import { Pets } from './components/Pets/Pets';
import { PetsProvider } from './context/PetsContext';

function App() {
  return (
    <div className="App">
      <PetsProvider>
        <h1>Pet Place</h1>
        <Pets />
      </PetsProvider>
    </div>
  );
}

export default App;
