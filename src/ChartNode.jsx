import React from 'react';
import { ArcherElement } from 'react-archer';

import './ChartNode.css';

class ChartNode extends React.Component {
    
    relations = [];

    getCurrentColor = () => document.getElementById(this.props.id + '-text').style.backgroundColor
    setCurrentColor = (color) => document.getElementById(this.props.id + '-text').style = `background-color:${color}`;

    getTargetColor = (target) => document.getElementById(target).style.backgroundColor
    setTargetColor = (target, color) => document.getElementById(target).style = `background-color:${color}`;
    
    render = () => {
        return (
            <ArcherElement id={this.props.id} relations={this.props.relations}>
                <span onClick={this.click} id={`${this.props.id}-text`}className='Chart-node'>
                    <span className='Chart-node-text'>
                        {this.props.nodeText}
                    </span>
                </span>
            </ArcherElement>
        )
    }

    componentDidMount = () => {
        if (this.props.relations) {
            this.props.relations.forEach((relation) => {
                const relationTextId = relation.targetId + '-text';
                this.relations.push(relationTextId)
                this.setTargetColor(relationTextId, "grey" )
            })
        }
    }

    click = () => {
        if (this.getCurrentColor() !== 'grey') {
            this.relations.forEach((relation) => {
                this.setTargetColor(relation, "rgb(72, 190, 240)")
            })
            this.setCurrentColor('lightgreen');
        }
    }
}

export default ChartNode;