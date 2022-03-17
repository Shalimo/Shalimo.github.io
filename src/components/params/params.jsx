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
                        <button>awdawd</button>
                    </div>
                    <div className="params-item">
                        <p>{this.props.currentRate}</p>
                    </div>
                </div>
            </div>
        )
    }
}