import logo from './logo.svg';
import './App.css';
import ColorSchemesExamples from './ColorSchemesExamples';
import Accordion from "./Accordion"
import BasicExample from './BasicExample';
import TextControlsExample from './TextControlsExample';

function App() {
  return (
    <div className="App">
     <ColorSchemesExamples/>
<Accordion/>
<BasicExample/>
<TextControlsExample/>
    </div>
  );
}

export default App;
