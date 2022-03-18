import React, {Component} from "react";
import "./content.css";
// import PropTypes from "prop-types";

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
                    <select value={this.props.currency} onChange={(e) => this.props.onCurrencyChange(e.target.value)}>
                        {this.props.currencies.map((currency) => (
                            <option value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="content-item">
                    <input className="" type="text" value={this.props.amount} onChange={(e) => this.props.onAmountChange(e.target.value)}></input>
                </div>
            </div>
        </div>
        )
    }
}


// only for dev mode:

// Content.propTypes = {
//     amount: PropTypes.number.isRequired,
//     currency: PropTypes.string.isRequired,
//     currencies: PropTypes.array.isRequired,
//     onAmountChange: PropTypes.func,
//     onCurrencyChange: PropTypes.func
// }