import React, { Component } from 'react';
let listUnit = [{ unit: "Theo giờ", value: "1" }, { unit: "Theo ngày", value: "2" }, { unit: "Theo tuần", value: "3" }, { unit: "Theo tháng", value: "4" }, { unit: "Theo năm", value: "5" }]
class TimeRepeat extends Component {
    constructor() {
        super()
        this.state = ({ showList: false, valueIP: "" })
    }
    // function renderListDropdown() to render a list unit time repeat
    renderListDropDown = () => listUnit.map((item, key) =>
        <option key={key} value={item.value} onChange={() => this.selectedItem(item.unit)}>{item.unit}</option>)
    clickShowList = () => this.setState({ showList: !this.state.showList })
    // selectedItem = () => select item in select tag
    // selectedItem = (s) => this.setState({ valueIP: s })
    selectedItem = (s) => {console.log(s)}
    render() {
        return (
            <div className="beatPerTime">
                <div className="beatPerTime1">
                    <label>Lặp lại: </label>
                    <div className="inputRepeat">
                        <input type="text" placeholder="Chọn lặp lại" value={this.state.valueIP.toString} onChange={this.selectedItem} />
                        <button onClick={this.clickShowList}><img src="../img/arrow-bottom.png" alt="icon-arrow-bottom"></img></button>
                    </div>
                    <label> mỗi </label>
                    <input type="text" placeholder="Nhập số" />
                    <label> ngày </label>
                </div>
                <div className="list-item">
                    {this.state.showList ? <select onClick={this.selectedItem} multiple >
                        {this.renderListDropDown()}
                    </select> : null}
                </div>
            </div>
        );
    }
}

export default TimeRepeat;