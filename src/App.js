import React from 'react';
import Palette from './Palette';
import seedColor from './seedColor';

function App() {
  return (
    <div>
        <Palette {...seedColor[3]} />
    </div>
  );
}

export default App;
