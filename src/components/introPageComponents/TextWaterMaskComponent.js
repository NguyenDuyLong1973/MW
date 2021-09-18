import React, { Component } from 'react';

class TextWaterMaskComponent extends Component {
    render() {
        return (
            <div className="textWaterMaskComponent">
                <p>{this.props.text}</p>
                <img src={this.props.nguonAnh} alt={this.props.alt}></img>
            </div>
        );
    }
}

export default TextWaterMaskComponent;