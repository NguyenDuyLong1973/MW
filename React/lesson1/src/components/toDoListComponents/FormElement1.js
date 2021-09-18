import React, { Component } from 'react';

class FormElement1 extends Component {
    render() {
        return (
            <div className="formElemement1">
                <label>{this.props.name}<span>*</span>:</label>
                <input type='text' placeholder={this.props.placeHolder} />
            </div>
        );
    }
}

export default FormElement1;