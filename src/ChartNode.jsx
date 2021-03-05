import React from 'react';
import { ArcherElement } from 'react-archer';

import './ChartNode.css';

class ChartNode extends React.Component {
    
    relations = [];
    clicked = false;
    
    render = () => {
        return (
            <ArcherElement id={this.props.id} relations={this.props.relations}>
                <span onClick={this.click} id={`${this.props.id}-text`}className='ChartNode'>
                    <span className='ChartNodeText'>
                        {this.props.nodeText}
                    </span>
                </span>
            </ArcherElement>
        )
    }

    componentDidMount = () => {
        if (this.props.relations) {
            this.props.relations.forEach((relation) => {
                this.relations.push(relation.targetId + '-text')
                document.getElementById(relation.targetId + '-text').style = "background-color:grey;"
            })
        }
    }

    click = () => {
        if (!this.clicked) {
            this.relations.forEach((relation) => {
                document.getElementById(relation).style = "background-color:rgb(72, 190, 240);"
            })
            document.getElementById(this.props.id + '-text').style = "background-color:lightgreen";
            
            this.clicked = true;
        }
    }
}

export default ChartNode;