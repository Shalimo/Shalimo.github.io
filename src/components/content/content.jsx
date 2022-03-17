import React, {Component} from "react";
import "./content.css";
import PropTypes from "prop-types";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
        <div className="content">
            <div className="content-wrapper">
                <div className="content-item">
                    <select value={this.props.currency}>
                        {this.props.currencies.map((currency) => (
                            <option value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="content-item">
                    <input className="" type="text" value={this.props.amount}></input>
                </div>
            </div>
        </div>
        )
    }
}

Content.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array.isRequired
}