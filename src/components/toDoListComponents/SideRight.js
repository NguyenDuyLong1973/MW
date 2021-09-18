import React, { Component } from 'react';

class SideRight extends Component {
    openFormCreateWork=()=>{
       this.props.openFormCreateWork()
    }
    search=(event)=>{
        console.log(event.target.value)
        this.props.search(event.target.value)
    }
    render() {
        return (
            <div className="sideRight">
                <div className="search-group">
                    <button className="bt-icon-search" type="button" ><img src="../img/search.png" alt="img search button" /></button>
                    <input className="input-serch" placeholder="Tìm kiếm" onchange={this.search}/>
                </div>
                <div className="option">
                    <button type="button" className="btn btn-outline-primary">Bộ lọc</button>
                    <button onClick={this.openFormCreateWork} className="btn btn-primary" type="submit">Tạo việt</button>
                </div>
            </div>
        );
    }
}

export default SideRight;