import React, { Component } from 'react';
import CheckBox from './RadioBox';
var listNameCheckBox = [{ nameCheckBox: "Rất ưu tiên" }, { nameCheckBox: "Ưu tiên" }, { nameCheckBox: "Bình thường" }, { nameCheckBox: "Thấp" }]
/*
State of class Prioritized inclues keyActived
*/
class Prioritized extends Component {
    constructor() {
        super()
    }
    // renderCheckBox() function to render check box for check box element
    renderCheckBox = () =>
        listNameCheckBox.map((item, key) =>
            <CheckBox key={key} nameCheckBox={item.nameCheckBox} nameInput={item.nameInput}  a={true}/>
        )

    render() {
        return (
            <div className="prioritized">
                <label>Mức độ ưu tiên</label>
                <div className="groupCheckBox">
                    {this.renderCheckBox()}
                </div>
            </div>
        );
    }
}

export default Prioritized;