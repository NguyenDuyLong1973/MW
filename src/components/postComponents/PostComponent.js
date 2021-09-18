import React, { Component } from 'react';
var btReaded;//variable is a state of this class to identify approach is readed
var index = 0;//index to implement function react() funtion
class PostComponent extends Component {
    constructor(props) {
        super(props)
        this.state = ({ numberApproach: parseInt(this.props.numberApproach), isReaded: false, displayCommentArea: false })
    }
    /*function react to setState number approach:
    if index % 2==0 , set state number approach increase 1 
    or index % 2 !=0 , set state number approach decrease 1
    */

    react = () => {
        if (index % 2 === 0) {
            this.setState({ numberApproach: this.state.numberApproach + 1, isReaded: true })
            index++
        } else {
            this.setState({ numberApproach: this.state.numberApproach - 1, isReaded: false })
            index--
        }
    }
    /**
     * function renderBtReadedByIsReaded() to render button number approach
     * defualt is button with name " Tiep can" and number approach increase 1 
     * if isReaded == true is button with name "Da tiep can" and number approach increase 1
     */
    renderBtReadedByIsReaded = () => {
        btReaded = <button className="bt-react bt-readed" onClick={this.react}><img src="../img/doubleTick.png" alt="img button double click"></img>Tiếp cận</button>
        if (this.state.isReaded) {
            btReaded = <button className="bt-react bt-readed" onClick={this.react}><img src="../img/tick-green.png" alt="img button double click"></img>Đã tiếp cận</button>
        }
    }
    clickButtonComment = () => {
        this.setState({ displayCommentArea: !(this.state.displayCommentArea) });
    }
    isShowCommentArea = () => {
        if (this.state.displayCommentArea) {
            return (
                <div>
                    <hr></hr>
                    <div className="areaComment areaCommentDisplay">
                        <span className="avt-poster"><img src={this.props.urlImgUser} alt="img user"></img></span>
                        <div className="inputGroup">
                            <input className="inputComment"></input>
                            <button className="sendMessage"><img src="../img/send-icon.png" alt="img send message"></img></button>
                        </div>
                    </div>
                </div>
            )
        }
        return (<div className="areaComment ">
            <span className="avt-poster"><img src={this.props.urlImgUser} alt="img user"></img></span>
            <input className="inputComment"></input>
        </div>)
    }
    render() {
        this.renderBtReadedByIsReaded();
        return (
            <div className="post-component">
                <div className="headerPost">
                    <span className="avt-poster"><img src={this.props.urlImgUser} alt="img user"></img></span>
                    <div className="detail">
                        <p className="name-poster">{this.props.nameUser}</p>
                        <p className="time-posted">{this.props.timed}</p>
                    </div>
                </div>
                <div className="bodyPost">
                    <p className="content-poster">{this.props.content}</p>
                    <img className="file-attach" src={this.props.imgUrlContent} alt="img content"></img>
                </div>
                <div className="footerPost">
                    <div className="parameter">
                        <p className="parameter-readed">{this.state.numberApproach} đã tiếp cận</p>
                        <p className="parameter-comment">{this.props.numComment} bình luận</p>
                    </div>
                    <hr></hr>
                    <div className="react">
                        {btReaded}
                        <button className="bt-react bt-comment" onClick={this.clickButtonComment}><img src="../img/comment.png" alt="img button comment"></img> Bình luận</button>
                    </div>
                    {this.isShowCommentArea()}
                </div>

            </div>
        );
    }
}

export default PostComponent;