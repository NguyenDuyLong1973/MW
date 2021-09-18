import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <label className="display row-lg-4">Tên người dùng</label>
                        <input type="text" className="form-control input row-lg-3" id="user" placeholder="&#xf007; Email/Phone" title="Là tên tài khoản của mày đó hiểu chưa" />
            </div>
        );
    }
}

export default User