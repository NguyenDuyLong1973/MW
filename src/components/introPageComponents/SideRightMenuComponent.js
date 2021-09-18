import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideRightMenuComponent extends Component {
    render() {
        return (
            <div className="sideRight">
                <div className="sideRight1">
                    <ul className="listItems">
                        <li><a className="linkHover" onClick={this.nhanNut} href={this.props.duongDan1}>{this.props.nameLink1}</a></li>
                        <li><a className="linkHover" href={this.props.duongDan2}>{this.props.nameLink2}</a></li>
                        <li><a className="linkHover" href={this.props.duongDan3}>{this.props.nameLink3}</a></li>
                        <li><a className="linkHover" href={this.props.duongDan4}>{this.props.nameLink4}</a></li>
                        {/* <li><a href={this.props.duongDan5}>{this.props.nameLink5}</a></li>
                        <li><a href={this.props.duongDan6}>{this.props.nameLink6}</a></li> */}
                        {this.props.sections.map((section) => (
                            <li key={section.id}>
                                <Link to={section.url}>{section.title}</Link>
                            </li>
                        ))}
                        <li><a href={this.props.duongDan5}>{this.props.nameLink5}</a></li>

                    </ul>
                </div>
                <div className="sideRight2">
                    <button onClick={this.showMenu}><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menuHidden" /></button>
                </div>
            </div>
        );
    }
}

export default SideRightMenuComponent