import React, { Component } from 'react';

class OptionForm extends Component {
    constructor(props){
        super(props)
        this.state=({showSubForm: this.props.showSubForm})
    }
    // clickShowSubForm() function when click image arrow will show subform
    clickShowSubForm=()=>{
        this.props.clickShowSubForm();
    }
    render() {
        return (
            <div className="form-option">
                <p>{this.props.nameOption}</p>
                <img onClick={this.clickShowSubForm} src={this.props.url}></img>
            </div>
        );
    }
}

export default OptionForm;