import React, { Component } from 'react';

class SlideItemComponent extends Component {
    render() {
        return (
            <div>
                <div className="slideItems">
                    <div className="item1">
                        <img className="imgSlides"
                            src={this.props.sourceImg}
                            alt={this.props.alt} />
                    </div>
                    <div className="item2">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.contents}</p>
                        <button><b>{this.props.nameButton}</b></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideItemComponent