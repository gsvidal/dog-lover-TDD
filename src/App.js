import './App.css';
import { Cards } from './components/Cards/Cards';
import { pets } from './mock';

function App() {
  return (
    <div className="App">
      <h1>Pet Place</h1>
      <Cards pets={pets} />
    </div>
  );
}

export default App;
