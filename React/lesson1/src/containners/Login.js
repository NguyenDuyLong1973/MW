import React, { Component } from 'react';
import ItemCenter from '../components/loginComponents/ItemCenter';
import '../style/login/login.css'

class Login extends Component {
    render() {
        return (
            <div className="login">
                <ItemCenter></ItemCenter>
            </div>
        );
    }
}

export default Login