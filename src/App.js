import React from 'react';
import logo from './logo.svg';
import './App.css';

import Presentation from './components/presentation';
import Howto from './components/howto';
import Demo from './components/demo';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Presentation/>
        <Demo/>
        <Howto/>
      </header>
    </div>
  );
}

export default App;
