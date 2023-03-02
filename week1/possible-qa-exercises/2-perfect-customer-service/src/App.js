import './App.css';
import guaranteesData from './data/guarantee';
import Guarantees from './components/Guarantee';

function App() {
  return (
    <div className="App">
      {Guarantees(guaranteesData)}
    </div>
  );
}

export default App;
