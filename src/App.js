import { useState } from 'react';
import colorData from './color-data.json';
import StarRating from './StarRating';
import './App.css';
import ColorList from './ColorList';

function App() {
  const [colors, setColors] = useState(colorData);

  return (

    
    <div className="App">
      <header className="App-header">
        <h1>Counting Stars</h1>
      </header>
      
        <ColorList colors={colors} />
      


      { /*}
      //  style={{ backgroundColor: "yellow" }}
        onDoubleClick = { e => alert('eita')}
      />
      */ }

    </div>
  );
}

export default App;
