import React, { Component } from 'react';
import list from '../mockData/data';
import ItemMenuVerticalComponent from './postComponents/ItemMenuVerticalComponent';
var classNames = require('classnames');
class MenuHidden extends Component {
    constructor() {
        super()
        this.state = {
            listMenu: list, displayMenu: false
        }
    }
    //function to render list item menu
    listItemMenu = () => {
        return this.state.listMenu.map((item, key) =>
            <ItemMenuVerticalComponent key={key} classNameIcon={item.classNameIcon} url={item.url} nameItemMenu={item.nameItemMenu} status={item.status} />
        )
    }
    //function showMenuHidden() to show menu hidden: set state displayMenu to true
    showMenuHidden = () => {
        this.props.showMenuHidden();
        this.setState({ displayMenu: true })
    }
    //function closeMenuHidden() to close menu hidden: change state displayMenu to false
    closeMenuHidden = () => {
        this.props.closeMenu();
        this.setState({ displayMenu: false })
    }
    render() {
        if (this.props.showMenuHidden !== this.state.displayMenu) {
            this.setState({ displayMenu: true })
        }
        return (
            <nav className={classNames("menuHidden", { "menuHiddenDisplay": (this.state.displayMenu) })}>
                <div className="contaninerLogo">
                    <img src="https://canhbaosom.com/themes/cm-cbs-20/partials/img/logo.fd13433e.svg" alt="" />
                    <button onClick={this.closeMenuHidden} className="bt-switch" ><img className="icon" src="../img/icon-close.png" alt=""></img></button>
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

export default MenuHidden;