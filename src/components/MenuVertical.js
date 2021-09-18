import React, { Component } from 'react';
import list from '../mockData/data';
import ItemMenuVerticalComponent from './postComponents/ItemMenuVerticalComponent';
var classNames = require('classnames');
var bSwitch;
//state menu vertical inclues a list contain data and state switchOn to change switch status menu v
class MenuVertical extends Component {
    constructor() {
        super()
        this.state = {
            listMenu: list, switchOn: true
        }
    }
    //function to render list item menu
    listItemMenu = () => {
        return this.state.listMenu.map((item, key) =>
            <ItemMenuVerticalComponent kichHoat={this.isLiClicked} key={key} classNameIcon={item.classNameIcon} url={item.url} nameItemMenu={item.nameItemMenu} status={item.status} />
        )
    }
    //function to change status of button switch
    changeStatusSwitch=()=> {
        this.props.clickBTClose();
        this.setState({ switchOn: !(this.state.switchOn) })
    }
    render() {
        //check condition to render button switch.if button switch on then width smaller than width default
        bSwitch = <button className="bt-switch" onClick={this.changeStatusSwitch}><img className="icon" src="../img/switch-on.png" alt=""></img></button>;
        if (!this.state.switchOn) {
            bSwitch = <button className="bt-switch" onClick={this.changeStatusSwitch}><img className="icon" src="../img/switch-off.png" alt=""></img></button>;
        }
        return (
            <nav className={classNames("menuDoc", { "menuDocZoomIn": !(this.state.switchOn) })}>
                <div className="contaninerLogo">
                    <img src="https://canhbaosom.com/themes/cm-cbs-20/partials/img/logo.fd13433e.svg" alt="" />
                    {bSwitch}
                </div>
                <div className="contaninerListItems">
                    <ul className="listItem">
                        {this.listItemMenu()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MenuVertical;