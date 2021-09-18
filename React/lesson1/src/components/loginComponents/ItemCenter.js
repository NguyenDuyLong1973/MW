import React, { Component } from 'react';
import FormLogin from './FormLogin';

class ItemCenter extends Component {
    render() {
        return (
            <div className="container itemCenter">
                <div className="imgItemCenter">
                    <img src="https://canhbaosom.com/themes/cm-cbs-20/partials/img/login.b80d233e.svg" alt="hình anh" />
                </div>
                <FormLogin/>
            </div>
        );
    }
}

export default ItemCenter