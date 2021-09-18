import React, { Component } from 'react';
import MenuVertical from '../components/MenuVertical';
import MenuHidden from '../components/MenuHidden';
import "../style/center/center.css"
import NavBarHeader from '../components/NavBarHeader';
import classNames from 'classnames';
import listComponent from "../mockData/switchComponent"
import { Route, Switch } from "react-router-dom";
import FormCreateWork from '../components/postComponents/FormCreateWork';

var menuDisplay;//variable of styleDisplayMenuVertical() to 
/*
*class center state inclues isShowmenuVertical to show menu vertical
*/
class Center extends Component {
    constructor(props) {
        super(props)
        this.state = ({ hasMenuDisplay: true, listComponent: listComponent, isShowFormCreateWork: false, newPost: null, showMenuHidden: false })
        this.closeMenuVertical = this.closeMenuVertical.bind(this)
    }
    /**
    * function closeMenuVertical() to close menu vertical
    */
    closeMenuVertical() {
        this.setState({ hasMenuDisplay: !(this.state.hasMenuDisplay) })
    }
    /**
     * function openForm() to open form create work
     */
    openForm = () => {
        this.setState({ isShowFormCreateWork: true })
    }
    /**
     * function offFormArea() to close form area
     */
    offFormArea = () => {
        this.setState({ isShowFormCreateWork: false })
    }
    /**
    * function stopOffFormArea() to stop event of element children from element parent
    */
    stopOffFormArea = (e) => {
        e.stopPropagation();
    }
    /**
     * function styleDisplayMenuVertical() to define style display of menu vertical
     */
    styleDisplayMenuVertical = () => {
        menuDisplay = null;
        menuDisplay = <MenuVertical clickBTClose={this.closeMenuVertical} />;
        if (this.state.showMenuHidden) {
            menuDisplay = <MenuHidden showMenuHidden={this.state.showMenuHidden} closeMenu={this.isHiddenMenuHidden} />
        }
        return menuDisplay;

    }
    //function renderShowFormWork
    renderShowFormWork = () => {
        return (<div id="form" className={classNames("form-create-area", { "on-form-create-area": (this.state.isShowFormCreateWork) })} onClick={this.offFormArea}>
            <FormCreateWork close={this.offFormArea} nhanDuoc={this.calmNewPost} />
        </div>)
    }
    //function check is show scroll bar
    displayScrollBar = () => {
        if (this.state.isShowFormCreateWork) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
    }
    //function calm new post
    calmNewPost = (s) => {
        this.setState({ newPost: s })
    }
    //function isDisplayMenuHidden() check is show menu hidden: set state is true if true
    isDisplayMenuHidden = () => {
        this.setState({ showMenuHidden: true })
    }
    //function isHiddenMenuHidden() check isn't show menu hidden: set state is true if false
    isHiddenMenuHidden = () => {
        this.setState({ showMenuHidden: false })
    }
    render() {
        this.displayScrollBar();
        return (
            <div >
                {this.styleDisplayMenuVertical()}
                <NavBarHeader openMenu={this.isDisplayMenuHidden} />
                {this.renderShowFormWork()}
                <div className={classNames("content", { "contentZomIn": (this.state.hasMenuDisplay) })}>
                    <Switch>
                        {this.state.listComponent.map((section, key) =>
                            <Route key={key} path={section.url} render={props => <section.component {...props} onForm={this.openForm}
                                updatePost={this.state.newPost}
                            />}></Route>
                        )}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Center;