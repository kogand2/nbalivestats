import React from 'react';
import PlayerStats from './nbalivestats/PlayerStats.jsx'
import GameStats from './nbalivestats/GameStats.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <div style = {{marginBottom: "100px"}}>
        <PlayerStats></PlayerStats>
      </div>  
      <div>
        <GameStats></GameStats>
      </div>
    </div>
  );
}

export default App;
