import React, { Component } from 'react';

class ItemWork extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>{this.props.nameWorkItem}</p>
                    </div>
                    <div className="col">
                        <p className={this.props.statusItemWork==="Mới"?"orange":this.props.statusItemWork==="Đang làm"?"blue":
                    this.props.statusItemWork==="Chờ xác nhận"?"blue-sky":this.props.statusItemWork==="Hoàn thành"?"green":
                    this.props.statusItemWork==="Đã hủy"?"black":"red"}>{this.props.statusItemWork}</p>
                    </div>
                    <div className="col">
                        <p >{this.props.timeEndingWork}</p>
                    </div>
                    <div className="col">
                        <p>{this.props.nameManager}</p>
                    </div>
                    <div className="col">
                        <p>{this.props.comment}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemWork;