import './App.css';
import CompoundComponents from './patterns/compound-component/Usage';
import ControlledComponent from './patterns/controlled-component/Usage';

function App() {
  return (
    <div className="App">
      <h1>Compound component</h1>
      <CompoundComponents />
      <h1>Controlled component</h1>
      <ControlledComponent />
    </div>
  );
}

export default App;
