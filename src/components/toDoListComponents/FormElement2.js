import React, { Component } from 'react';

class FormElement2 extends Component {
    render() {
        return (
            <div className="formElement2">
                <label>{this.props.label}</label>
                <input type="date" id="start" name="trip-start"
                    placeholder="Chọn ngày bắt đầu"></input>
            </div>
        );
    }
}

export default FormElement2;