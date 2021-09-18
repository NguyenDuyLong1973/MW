import React, { Component } from 'react';
/*
class ListDrop have state valueSelected
*/
class ListDrop extends Component {
    constructor(){
        super()
        this.state=({valueSelected:""})
    }
    // function changeValue() to change value selected of select tag
    // changeValue=(s)=> this.setState({valueSelected:s})
    changeValue=(s)=>console.log(s)
    render() {
        return (
            <div className="input-group mb-3">
                <select className="custom-select" defaultValue={this.state.valueSelected}>
                    <option value="1" onChange={()=>this.changeValue("1")}>Ngày</option>
                    <option value="2" onChange={()=>this.changeValue("2")}>Giờ</option>
                </select>
            </div>
        );
    }
}

export default ListDrop;