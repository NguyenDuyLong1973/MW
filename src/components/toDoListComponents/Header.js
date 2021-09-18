import React, { Component } from 'react';
import Search from '../../containners/Search';

class Header extends Component {
    openFormCreateWork=()=>{
        this.props.openFormCreateWork();
    }
    render() {
        return (
            <div className="headerPage">
                <div className="titleList">
                    <p>Danh sách</p>
                </div>
                <div className="opiton-area">
                    <Search />
                    <div>
                        <button type="button" onClick={this.openFormCreateWork} className="btn btn-primary">Tạo công việc</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;