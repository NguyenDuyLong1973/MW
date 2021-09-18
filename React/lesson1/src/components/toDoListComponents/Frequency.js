import React, { Component } from 'react';
import ListDrop from './ListDrop';

class Frequency extends Component {
    render() {
        return (
            <div className="frequency">
                <ListDrop/>
                <input placeholder="Nhập số thời gian hoàn thành"></input>
            </div>
        );
    }
}

export default Frequency;