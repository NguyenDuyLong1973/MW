import React, { Component } from 'react';

class FilterComponent extends Component {
    filterNew = () => {
        this.props.filterNew()
    }
    filterWaiting = () => {
        this.props.filterWaiting()
    }
    filterWorking = () => {
        this.props.filterWorking()
    }
    filterComplete = () => {
        this.props.filterComplete()
    }
    filterCancel = () => {
        this.props.filterCancel()
    }
    filterDelay = () => {
        this.props.filterDelay()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" onClick={this.filterNew} className="btn btn-outline-primary">Mới({this.props.numberNewWork})</button>
                    </div>
                    <div className="col">
                        <button type="button" onClick={this.filterWorking} className="btn btn-outline-primary">Đang làm({this.props.numberWorking})</button>
                    </div>
                    <div className="col">
                        <button type="button" onClick={this.filterWaiting} className="btn btn-outline-primary">Chờ xác nhận({this.props.numberWorkWaiting})</button>
                    </div>
                    <div className="col">
                        <button type="button" onClick={this.filterComplete} className="btn btn-outline-primary">Hoàn thành({this.props.numberCompeleteWork})</button>
                    </div>
                    <div className="col">
                        <button type="button" onClick={this.filterCancel} className="btn btn-outline-primary">Đã hủy({this.props.numberCancelWork})</button>
                    </div>
                    <div className="col">
                        <button type="button" onClick={this.filterDelay} className="btn btn-outline-primary">Qúa hạn({this.props.numberDelayWork})</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterComponent;