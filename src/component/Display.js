import React,{ Component } from 'react';
import "./display.scss";

class Display extends Component {

    render()
    {
        return (
            <div className="display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default Display