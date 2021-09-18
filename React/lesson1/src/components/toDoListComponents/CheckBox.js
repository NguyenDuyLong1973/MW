import React, { Component } from 'react';

class CheckBox extends Component {
    clickOptionRepeatWork=()=>this.props.clickOptionRepeatWork();
    render() {
        return (
            <div className="num">
                <input type="checkbox" onClick={this.clickOptionRepeatWork}/>
                <label>{this.props.nameLabel}</label>
            </div>
        );
    }
}

export default CheckBox;