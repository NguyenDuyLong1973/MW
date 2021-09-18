import React, { Component } from 'react';
class ButtonChangeSlide extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="buttonSlide">
                <button className="bt" onClick={this.props.sk} id="buttonLeft" ><img src={this.props.anhBTLeft} alt={this.props.descLeft} /></button>
                <button className="bt" id="buttonRight"><img src={this.props.anhBTRight} alt={this.props.descRight}  /></button>
            </div>
        );
    }
}

export default ButtonChangeSlide