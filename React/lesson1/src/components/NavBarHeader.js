import React, { Component } from 'react';

class NavBarHeader extends Component {
    constructor() {
        super()
        this.state = ({ userName: "Nguyễn Dũy Long", place: "Ký túc xá Cỏ May" })
    }
    openMenuHidden=()=>{
        this.props.openMenu();
    }
    render() {
        return (
            <div className="containHeaderNav">
                <nav className="navHearder">
                    <div className="navLeft">
                        <button className="bt-menu" onClick={this.openMenuHidden}><img src="../img/menuBGwhite.png" alt=""></img></button>
                    </div>
                    <div className="navRight">
                        <button className="bt-nofication"><img src="../img/bell-nofication.gif" alt=""></img></button>
                        <div className="infor-staff">
                            <p>{this.state.userName}</p>
                            <small>{this.state.place}</small>
                        </div>
                        <button className="bt-avartar"><img src="../img/user-static.png" alt=""></img></button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBarHeader;