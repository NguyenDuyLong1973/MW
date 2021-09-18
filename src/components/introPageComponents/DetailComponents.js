import React, { Component } from 'react';

class Details extends Component {
    render() {
        return (
            <div className="containerDetail">
                <div className="containerIconDetail">
                    <img className="iconDetail" src={this.props.nguonAnh} alt={this.props.alt}/>
                </div>
                <div className="containerInforDetail">
                    <h3 className="titleDetail">
                        {this.props.title}
                    </h3>
                    <p className="textDetail">
                        {this.props.content }
                    </p>
                </div>
            </div>
        );
    }
}

export default Details