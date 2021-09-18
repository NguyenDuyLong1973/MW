import React, { Component } from 'react';

class ItemTablePriceComponent extends Component {
    render() {
        return (
            <div className="itemTablePriceComponent">
                <img className="iconItemTablePrice" src="../img/tick.png" alt="icon completed"/>
                <p className="textItemTableComponent">{this.props.text}</p>
            </div>
        );
    }
}

export default ItemTablePriceComponent;