import './App.css';
import CompoundComponents from './patterns/compound-component/Usage';
import ControlledComponent from './patterns/controlled-component/Usage';
import CustomHooks from './patterns/custom-hooks/Usage';
import PropsGetters from './patterns/props-getters/Usage';
import StateReducer from './patterns/state-reducer/Usage';

function App() {
  return (
    <div className="App">
      <h1>Compound component</h1>
      <CompoundComponents />
      <h1>Controlled component</h1>
      <ControlledComponent />
      <h1>Custom hooks</h1>
      <CustomHooks />
      <h1>Props getters</h1>
      <PropsGetters />
      <h1>State reducer</h1>
      <StateReducer />
    </div>
  );
}

export default App;
