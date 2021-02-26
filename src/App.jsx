import React from 'react';
import ChartNode from './ChartNode'
import { ArcherContainer } from 'react-archer';

import './App.css';

class App extends React.Component {
  
  generateRelations = (targetId, targetAnchor, sourceAnchor, targetId2, targetAnchor2, sourceAnchor2, targetId3, targetAnchor3, sourceAnchor3, targetId4, targetAnchor4, sourceAnchor4) => {
    
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

    if (targetId4) {
      relations.push({
        targetId: targetId4,
        targetAnchor: targetAnchor4,
        sourceAnchor: sourceAnchor4
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
              <ChartNode id='tempest-keep-key' nodeText='TK Key ✓'/>
              <ChartNode id='tk-key-quest' relations={this.generateRelations('steam-vault-hc', 'left', 'right', 'shalls-hc', 'top', 'bottom', 'shadow-labs-hc', 'top', 'bottom', 'arcatraz-hc', 'top', 'bottom')} nodeText='TK Quest'/> 
              <ChartNode id='steam-vault-hc' nodeText='SVault HC'/> 
              <ChartNode id='cexp-revered' relations={this.generateRelations('slave-pens-hc', 'left', 'right', 'steam-vault-hc', 'right', 'left')} nodeText='CExp Revered'/>
              <ChartNode id='slave-pens-hc' relations={this.generateRelations('ssc-quest', 'top', 'bottom')} nodeText='SPens HC'/> 
              <ChartNode id='gruul' nodeText="Gruul's Lair"/> 
            </div>
            
            <div className="Chart-row">
              <ChartNode id='shalls-hc' nodeText='SHalls HC'/>
              <ChartNode id='shadow-labs-hc' nodeText='SLab HC'/>
              <ChartNode id='arcatraz-hc' nodeText="Arcatraz HC"/>
              <ChartNode id='kara-key' nodeText='Karazhan Key ✓'/>
              <ChartNode id='the-dark-portal' relations={this.generateRelations('kara-key', 'right', 'left')} nodeText='The Dark Portal'/>
              <ChartNode id='ssc-quest' relations={this.generateRelations('gruul', 'right', 'right')} nodeText='SSC Quest'/>
              
            </div>
            
            <div className="Chart-row">
              <ChartNode id='shalls-hc-key-quest' relations={this.generateRelations('shalls-hc', 'bottom', 'top')} nodeText='SHalls HC Key ✓'/>
              <ChartNode id='lower-city-revered' relations={this.generateRelations('shadow-labs-hc', 'bottom', 'top')} nodeText='LCity Revered'/>
              <ChartNode id='arcatraz-hc-key' relations={this.generateRelations('arcatraz-hc', 'bottom', 'top')} nodeText="Arcatraz HC Key ✓"/>
              <ChartNode id='durnholde' relations={this.generateRelations('the-dark-portal', 'bottom', 'top')} nodeText='OHF'/>
              <ChartNode id='cot-entrance-quest' relations={this.generateRelations('durnholde', 'right', 'left')} nodeText='CoT Quest'/>
            </div>
            
            <div className="Chart-row">
              <ChartNode id='shalls-key-quest' relations={this.generateRelations('shalls-hc-key-quest', 'bottom', 'top')} nodeText='SHalls Key ✓'/>
              <ChartNode id='honor-hold-revered' relations={this.generateRelations('shalls-hc-key-quest', 'bottom', 'top')} nodeText='HHold Revered'/>
              <ChartNode id='shatar-revered' relations={this.generateRelations('arcatraz-hc-key', 'bottom', 'top')} nodeText="Sha'tar Revered"/>
              <ChartNode id='arcatraz-questline-complete' relations={this.generateRelations('arcatraz', 'left', 'right', 'arcatraz-hc-key', 'bottom', 'top')} nodeText='Arcatraz Key ✓'/>
              <ChartNode id='arcatraz' relations={this.generateRelations('the-dark-portal', 'right', 'top')} nodeText='Arcatraz'/>
              
            </div>
            
            <div className="Chart-row">
              <ChartNode id='mechanar' relations={this.generateRelations('arcatraz-questline-complete', 'bottom', 'top')} nodeText='The Mechanar'/>
              <ChartNode id='botanica' relations={this.generateRelations('arcatraz-questline-complete', 'bottom', 'top')} nodeText='The Botanica'/>
              <ChartNode id='steam-vaults' relations={this.generateRelations('arcatraz', 'bottom', 'top')} nodeText='The Steam Vaults'/>
            </div>
            
            <div className="Chart-row">
              <ChartNode id='kazzak' nodeText='Kazzak'/>
              <ChartNode id='arcatraz-questline' relations={this.generateRelations('mechanar', 'bottom', 'top', 'botanica', 'bottom', 'top')} nodeText='Arcatraz Key Quest'/>
              <ChartNode id='magtheridon' nodeText='Magtheridon'/>
              <ChartNode id='shadow-labs' relations={this.generateRelations('steam-vaults', 'bottom', 'top')} nodeText='Shadow Labs'/>
              
            </div>

            <div className="Chart-row">
              <ChartNode id='flying-mount' relations={this.generateRelations('kazzak', 'bottom', 'top', 'arcatraz-questline', 'bottom', 'top')} nodeText='Flying Mount'/>
              <ChartNode id='level-70' relations={this.generateRelations('flying-mount', 'right', 'left', 'magtheridon', 'bottom', 'top', 'start-karazhan-quest', 'left', 'right')} nodeText='Level 70'/>
              <ChartNode id='start-karazhan-quest' relations={this.generateRelations('shadow-labs', 'bottom', 'top')} nodeText='Start Karazhan Quest'/>
            </div>

          </ArcherContainer>
        </div>
      </div>
    );
  }
}

export default App;
