import React, { Component } from 'react';
import TablePriceComponent1 from './TablePriceComponent1';
import TextWaterMaskComponent from './TextWaterMaskComponent';
import TablePriceComponent2 from './TablePriceComponent2';

class ListTablePriceComponent extends Component {
    render() {
        return (
            <div className="sessionTablePriceComponent">
                <TextWaterMaskComponent nguonAnh="../img/dollarSign.png" text="BẢNG GIÁ" />
                <div className="listTablePriceComponents">
                    <TablePriceComponent1 typePrice="GÓI KHỞI NGHIỆP" text1="3 người dùng" text2="Sản phẩm không giới hạn" text3="Dùng thử 15 ngày"/>
                    <TablePriceComponent1 typePrice="GÓI TIÊU CHUẨN" text1="10 người dùng" text2="Sản phẩm không giới hạn" text3="Dùng thử 15 ngày"/>
                    <TablePriceComponent2 typePrice="GÓI TÙY CHỈNH" text1="Người dùng không giới hạn " text2="Sản phẩm không giới hạn" text3="Tùy chỉnh chức năng" text4="Dùng thử 15 ngày"/>
                </div>
            </div>
        );
    }
}

export default ListTablePriceComponent