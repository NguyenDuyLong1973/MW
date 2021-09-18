import React, { Component } from 'react';

class TitleWorkItem extends Component {
    render() {
        return (
            <div className="container marginContainer">
                <div className="row">
                    <div className="col">
                        <p>TÊN CÔNG VIỆC</p>
                    </div>
                    <div className="col">
                        <p>TRẠNG THÁI</p>
                    </div>
                    <div className="col">
                        <p>DỰ KIẾN KẾT THÚC</p>
                    </div>
                    <div className="col">
                        <p>NGƯỜI GIAO</p>
                    </div>
                    <div className="col">
                        <p>ĐÁNH GIÁ</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleWorkItem;