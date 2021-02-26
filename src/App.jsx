import React from 'react';
import ChartNode from './ChartNode'
import { ArcherContainer } from 'react-archer';

import './App.css';

class App extends React.Component {
  
  generateRelations = (targetId, targetAnchor, sourceAnchor, targetId2, targetAnchor2, sourceAnchor2, targetId3, targetAnchor3, sourceAnchor3) => {
    
    // refactor this as soon as humanly possible
    
    const relations = [];

    if (targetId) {
      relations.push({
        targetId,
        targetAnchor,
        sourceAnchor
      })
    }

    if (targetId2) {
      relations.push({
        targetId: targetId2,
        targetAnchor: targetAnchor2,
        sourceAnchor: sourceAnchor2
      })
    }

    if (targetId3) {
      relations.push({
        targetId: targetId3,
        targetAnchor: targetAnchor3,
        sourceAnchor: sourceAnchor3
      })
    }
    
    return relations;
  }
  
  render = () => {
    return (
      <div className="App">
        <header className="Header">attunement.tbc</header>
        <div className="Main-content">
          <ArcherContainer strokeColor="white">
            <div className="Chart-row">
              <ChartNode id='kazzak' nodeText='Kazzak'/>
              <ChartNode id='arcatraz-questline' nodeText='Arcatraz Questline'/>
              <ChartNode id='magtheridon' nodeText='Magtheridon'/>
            </div>

            <div className="Chart-row">
              <ChartNode id='flying-mount' relations={this.generateRelations('kazzak', 'bottom', 'top', 'arcatraz-questline', 'bottom', 'top')} nodeText='Flying Mount'/>
              <ChartNode id='level-70' relations={this.generateRelations('flying-mount', 'right', 'left', 'magtheridon', 'bottom', 'top', 'start-karazhan-quest', 'left', 'right')} nodeText='Level 70'/>
              <ChartNode id='start-karazhan-quest' nodeText='Start Karazhan Quest'/>
          </div>
          </ArcherContainer>
        </div>
      </div>
    );
  }
}

export default App;
