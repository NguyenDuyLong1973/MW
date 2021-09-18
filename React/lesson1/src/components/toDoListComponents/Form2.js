import React, { Component } from 'react';
import RadioBox from './RadioBox';
import FormElement2 from './FormElement2';
import Frequency from './Frequency';
import CheckBox from './CheckBox';
import TimeRepeat from './TimeRepeat';
/*
State of class Form2 inclues changeStatusFrequency 
*/

class Form2 extends Component {
    constructor() {
        super()
        this.state = ({ changeStatusFrequency: true, choseRepeatWork: false })
    }
    // statusOneSelected() function to define status of check box first
    statusOneSelected = () => this.setState({ changeStatusFrequency: true })
    // statusTwoSelected() function to define status of check box second
    statusTwoSelected = () => this.setState({ changeStatusFrequency: false })
    // function choseRepeatWork(): if click check box repeat work then will none show radio box second and again
    choseRepeatWorkOrNone = () => this.setState({ choseRepeatWork: !this.state.choseRepeatWork })
    render() {
        return (
            <div className="form2">
                <FormElement2 label="Thời điểm bắt đầu:" />
                <div className="group-radio-box">
                    <RadioBox clickRadioBox={this.statusOneSelected} nameCheckBox="Thời gian hoàn thành" isSelected={true} />
                    {this.state.choseRepeatWork===false ? <RadioBox clickRadioBox={this.statusTwoSelected} nameCheckBox="Thời điểm hoàn thành" isSelected={false} /> : null}
                </div>
                {this.state.changeStatusFrequency ? <Frequency /> : <input type="date" id="start" name="trip-start"
                    placeholder="Chọn ngày bắt đầu"></input>}
                <CheckBox nameLabel="Lặp lại công việc" clickOptionRepeatWork={this.choseRepeatWorkOrNone} />
                <TimeRepeat/>
            </div>
        );
    }
}

export default Form2;