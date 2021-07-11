import './App.css';
import CompoundComponents from './patterns/compound-component/Usage';
import ControlledComponent from './patterns/controlled-component/Usage';
import CustomHooks from './patterns/custom-hooks/Usage';

function App() {
  return (
    <div className="App">
      <h1>Compound component</h1>
      <CompoundComponents />
      <h1>Controlled component</h1>
      <ControlledComponent />
      <h1>Custom hooks</h1>
      <CustomHooks />
    </div>
  );
}

export default App;
