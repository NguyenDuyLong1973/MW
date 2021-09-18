import React, { Component } from 'react';

class CheckBox extends Component {
    constructor() {
        super()
    }
    // function clickRadioBox() when click will call back function clickRadioBox() from componet parent
    clickRadioBox=()=>this.props.clickRadioBox();
    render() {
        return (
            <div className="checkBox">
                <input onClick={this.clickRadioBox} type="radio" name="check box" defaultChecked={this.props.isSelected}/>
                <label>{this.props.nameCheckBox}</label>
            </div>
        );
    }
}

export default CheckBox;