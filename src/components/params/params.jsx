import React, {Component} from 'react';
import './params.css';

export default class Params extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="params">
                <div className="params-wrapper">
                    <div className="params-item">
                        <button>SWAP</button>
                    </div>
                    <div className="params-item">
                        <p>Current rate: {this.props.currentRate}</p>
                    </div>
                </div>
            </div>
        )
    }
}