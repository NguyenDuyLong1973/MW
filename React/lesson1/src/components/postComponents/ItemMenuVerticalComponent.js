import React, { Component } from 'react';
import { Link } from "react-router-dom"
import classNames from 'classnames';
/*
*state component inclues:hasMenuItemSub(true or false)
*/
class ItemMenuVerticalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = ({ hasMenuItemSub: null, menuItemActived: false })
        this.clickedItem = this.clickedItem.bind(this)
    }
    //check state hasMenuItem is true or false.if true then component have more subitem and if false then haven't subitem
    clickedItem = () => {
        // this.setState({ menuItemActived: true })
    }
    render() {
        return (
            <div onClick={this.clickedItem} className={classNames("containSubItem", { "clicked": this.state.menuItemActived })}>
                <li role="presentation"><i className={this.props.classNameIcon}></i><Link  to={this.props.url}>{this.props.nameItemMenu}</Link></li>
            </div>
        );
    }
}

export default ItemMenuVerticalComponent;