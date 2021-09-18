import React, { Component } from 'react';
import FormElement1 from './FormElement1';
import Prioritized from './Prioritized';
import TextArea from './TextArea';

class Form1 extends Component {
    render() {
        return (
            <div className="form1">
                <FormElement1 name="Tên công việc" placeHolder="Nhập tên công việc"/>
                <FormElement1 name="Người được giao" placeHolder="Chọn người được giao"/>
                <Prioritized/>
                <TextArea/>
            </div>
        );
    }
}

export default Form1;