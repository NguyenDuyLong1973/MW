import React, { Component } from 'react';

class GioiThieuComponent extends Component {
    render() {
        return (
            <div className="itemComponent">
                <div className="circle">
                    <img src={this.props.nguonAnh} alt={this.props
                        .alt} />
                </div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default GioiThieuComponent