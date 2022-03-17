import React, {Component} from "react";
import "./content.css";

export default class Content extends Component {
    render(){
        return (
        <div className="content">
            <div className="content-wrapper">
                <div className="content-item">
                    <select></select>
                </div>
                <div className="content-item">
                    <input className="" type="text" value={1}></input>
                </div>
            </div>
        </div>
        )
    }
}