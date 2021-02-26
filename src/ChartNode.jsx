import React from 'react';
import './ChartNode.css';

class ChartNode extends React.Component {
    render = () => {
        return (
            <span style={{}} className='ChartNode'>
                <span className='ChartNodeText'>
                    {this.props.nodeText}
                </span>
            </span>
        )
    }
}

export default ChartNode;