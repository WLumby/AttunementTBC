import React from 'react';
import ChartNode from './ChartNode'
import { ArcherContainer } from 'react-archer';
import { generateRelations } from './helpers/generate-relations'

import './App.css';

class App extends React.Component {
  render = () => { 
    return (
      <div className="App">
        <header className="Header">attunement.tbc</header>
        <div className="Main-content">
          <ArcherContainer strokeColor="white">
            
            <div className="Chart-row">
              <ChartNode id='tempest-keep-key' nodeText='TK Key ✓'/>
              <ChartNode id='tk-key-quest' relations={generateRelations('steam-vault-hc', 'left', 'right', 'shalls-hc', 'top', 'bottom', 'shadow-labs-hc', 'top', 'bottom', 'arcatraz-hc', 'top', 'bottom')} nodeText='TK Quest'/> 
              <ChartNode id='steam-vault-hc' nodeText='SVault HC'/> 
              <ChartNode id='cexp-revered' relations={generateRelations('slave-pens-hc', 'left', 'right', 'steam-vault-hc', 'right', 'left')} nodeText='CExp Revered'/>
              <ChartNode id='slave-pens-hc' relations={generateRelations('ssc-quest', 'top', 'bottom')} nodeText='SPens HC'/> 
              <ChartNode id='gruul' nodeText="Gruul's Lair"/> 
            </div>
            
            <div className="Chart-row">
              <ChartNode id='shalls-hc' nodeText='SHalls HC'/>
              <ChartNode id='shadow-labs-hc' nodeText='SLab HC'/>
              <ChartNode id='arcatraz-hc' nodeText="Arcatraz HC"/>
              <ChartNode id='kara-key' nodeText='Karazhan Key ✓'/>
              <ChartNode id='the-dark-portal' relations={generateRelations('kara-key', 'right', 'left')} nodeText='The Dark Portal'/>
              <ChartNode id='ssc-quest' relations={generateRelations('gruul', 'right', 'right')} nodeText='SSC Quest'/>
              
            </div>
            
            <div className="Chart-row">
              <ChartNode id='shalls-hc-key-quest' relations={generateRelations('shalls-hc', 'bottom', 'top')} nodeText='SHalls HC Key ✓'/>
              <ChartNode id='lower-city-revered' relations={generateRelations('shadow-labs-hc', 'bottom', 'top')} nodeText='LCity Revered'/>
              <ChartNode id='arcatraz-hc-key' relations={generateRelations('arcatraz-hc', 'bottom', 'top')} nodeText="Arcatraz HC Key ✓"/>
              <ChartNode id='durnholde' relations={generateRelations('the-dark-portal', 'bottom', 'top')} nodeText='OHF'/>
              <ChartNode id='cot-entrance-quest' relations={generateRelations('durnholde', 'right', 'left')} nodeText='CoT Quest'/>
            </div>
            
            <div className="Chart-row">
              <ChartNode id='shalls-key-quest' relations={generateRelations('shalls-hc-key-quest', 'bottom', 'top')} nodeText='SHalls Key ✓'/>
              <ChartNode id='honor-hold-revered' relations={generateRelations('shalls-hc-key-quest', 'bottom', 'top')} nodeText='HHold Revered'/>
              <ChartNode id='shatar-revered' relations={generateRelations('arcatraz-hc-key', 'bottom', 'top')} nodeText="Sha'tar Revered"/>
              <ChartNode id='arcatraz-questline-complete' relations={generateRelations('arcatraz', 'left', 'right', 'arcatraz-hc-key', 'bottom', 'top')} nodeText='Arcatraz Key ✓'/>
              <ChartNode id='arcatraz' relations={generateRelations('the-dark-portal', 'right', 'top')} nodeText='Arcatraz'/>
              
            </div>
            
            <div className="Chart-row">
              <ChartNode id='mechanar' relations={generateRelations('arcatraz-questline-complete', 'bottom', 'top')} nodeText='The Mechanar'/>
              <ChartNode id='botanica' relations={generateRelations('arcatraz-questline-complete', 'bottom', 'top')} nodeText='The Botanica'/>
              <ChartNode id='steam-vaults' relations={generateRelations('arcatraz', 'bottom', 'top')} nodeText='The Steam Vaults'/>
            </div>
            
            <div className="Chart-row">
              <ChartNode id='kazzak' nodeText='Kazzak'/>
              <ChartNode id='arcatraz-questline' relations={generateRelations('mechanar', 'bottom', 'top', 'botanica', 'bottom', 'top')} nodeText='Arcatraz Key Quest'/>
              <ChartNode id='magtheridon' nodeText='Magtheridon'/>
              <ChartNode id='shadow-labs' relations={generateRelations('steam-vaults', 'bottom', 'top')} nodeText='Shadow Labs'/>
              
            </div>

            <div className="Chart-row">
              <ChartNode id='flying-mount' relations={generateRelations('kazzak', 'bottom', 'top', 'arcatraz-questline', 'bottom', 'top')} nodeText='Flying Mount'/>
              <ChartNode id='level-70' relations={generateRelations('flying-mount', 'right', 'left', 'magtheridon', 'bottom', 'top', 'start-karazhan-quest', 'left', 'right')} nodeText='Level 70'/>
              <ChartNode id='start-karazhan-quest' relations={generateRelations('shadow-labs', 'bottom', 'top')} nodeText='Start Karazhan Quest'/>
            </div>

          </ArcherContainer>
        </div>
      </div>
    );
  }
}

export default App;
