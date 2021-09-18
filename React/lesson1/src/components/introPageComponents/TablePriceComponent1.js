import React, { Component } from 'react';
import ItemTablePriceComponent from './ItemTablePriceComponent';

class TablePriceComponent1 extends Component {
    render() {
        return (
            <div className="tablePriceComponent" >
                <div className="headerH2">
                    <h2 className="h2TablePriceComponent">{this.props.typePrice}</h2>
                </div>
                <div className="listItemTablePrice">
                    <ItemTablePriceComponent text={this.props.text1} />
                    <ItemTablePriceComponent text={this.props.text2} />
                    <ItemTablePriceComponent text={this.props.text3} />
                </div>
                <hr />
                <h2 className="h2TablePriceComponent">LIÊN HỆ</h2>
                <div className="registerButton"><button >ĐĂNG KÍ</button></div>
            </div>
        );
    }
}

export default TablePriceComponent1;