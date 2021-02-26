import React from 'react';
import ChartNode from './ChartNode'
import './App.css';

class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <header className="Header">attunement.tbc</header>
        <div className="Main-content">
          <ChartNode nodeText='Flying Mount'/>
          <ChartNode nodeText='Level 70'/>
          <ChartNode nodeText='Start Karazhan Quest'/>
        </div>
      </div>
    );
  }
}

export default App;
