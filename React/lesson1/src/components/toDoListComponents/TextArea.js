import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        return (
            <div className="text-area">
                <label>Mô tả công việc <span>*</span>:</label>
                <textarea></textarea>
            </div>
        );
    }
}

export default TextArea;