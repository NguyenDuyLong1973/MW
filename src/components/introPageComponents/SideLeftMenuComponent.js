import React, { Component } from 'react';

class SideLeftMenuComponent extends Component {
    render() {
        return (
            <div className="sideLeft">
                <div className="sideLeft1">
                    <a href={this.props.duongDan}><img
                        src={this.props.srcAnh1}
                        alt={this.props.alt} /> </a>
                </div>
                <div className="sideLeft2">
                    <a href={this.props.duongDan}><img
                        src={this.props.srcAnh2}
                        alt={this.props.alt} /> </a>
                </div>
            </div>
        );
    }
}

export default SideLeftMenuComponent