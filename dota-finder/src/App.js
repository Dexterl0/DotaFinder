import React, { useState } from 'react';
import './css/App.css';
import InputID from './components/InputID';
import MatchData from './components/MatchData';
import Header from './components/Header';

function App() {
  
  const [matchID, setMatchID] = useState("");
  const [matchData, setMatchData] = useState({});
  const [matchDataLoaded, setMatchDataLoaded] = useState(false);

  return (
    <div className="App">
      <Header />
      <InputID matchID={matchID} setMatchID={setMatchID} setMatchData={setMatchData} setMatchDataLoaded={setMatchDataLoaded} />
      <MatchData className="matchDataClass" matchData={matchData} matchDataLoaded={matchDataLoaded}/>
    </div>
  );
}

export default App;
