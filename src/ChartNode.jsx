import React from 'react';
import { ArcherElement } from 'react-archer';

import './ChartNode.css';

class ChartNode extends React.Component {
    
    
    render = () => {
        return (
            <ArcherElement id={this.props.id} relations={this.props.relations}>
                <span className='ChartNode'>
                    <span className='ChartNodeText'>
                        {this.props.nodeText}
                    </span>
                </span>
            </ArcherElement>
        )
    }
}

export default ChartNode;