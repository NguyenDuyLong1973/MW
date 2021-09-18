import React, { Component } from 'react';
import { Link } from "react-router-dom"

class FormLogin extends Component {
    handleClick = (event) => {
        event.preventDefault();
      
    }
    render() {
        return (
            <div className="formLoginCenter">
                <label className="labelSayHi">Xin chào</label>
                <p className="textP">Vui lòng đăng nhập tài khoản của bạn!</p>
                <form action="/" method="POST" role="none">
                    <div className="form-group">
                        <label className="display ">Tên người dùng</label>
                        <input type="text" className="form-control input" id="user" placeholder="&#xf007; Email/Phone" title="Là tên tài khoản của mày đó hiểu chưa" />
                        <label className="display">Mật khẩu là cần thiết</label>
                        <input type="password" name="passLogin" id="passLogin" className="form-control input" required="required" title="Nhập mật khẩu của mày vô , lẹ lên" placeholder="&#xf084; Mật khẩu" />
                    </div>
                    <button type="submit" onClick={this.handleClick} className="btn-login"><Link style={{ color: "white" }} to="/center">ĐĂNG NHẬP</Link></button>
                </form>
            </div>
        );
    }
}

export default FormLogin