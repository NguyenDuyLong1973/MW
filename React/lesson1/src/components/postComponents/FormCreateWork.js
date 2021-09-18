import React, { Component } from 'react';
import PostObj from '../../mockData/PortObj';

class FormCreateWork extends Component {
    constructor(props) {
        super(props)
        this.state = ({ content: "", urlImg: "", friends: "" })
        this.fileInput=React.createRef()
    }
    //function stopOff() to stop event handing from element parent 
    stopOff = (e) => {
        // this.props.koAnhHuong();
        e.stopPropagation();
    }
    //function offFormArea() to close form 
    offFormArea = () => {
        this.props.close();
        this.setState({ content: "" })
    }
    contentChange = (e) => {
        this.setState({ content: e.target.value })
    }
    //function onPost() to post on newsfeed
    onPost = () => {
        var post = new PostObj("../img/user-static.png", "Nguyễn Dũy Long", "now", this.state.content, "../img/imgContent.jpg", "0", "0")
        this.props.nhanDuoc(post);
        this.offFormArea();
    }  
    render() {
        return (
            <div onClick={this.stopOff} className="form-create-form">
                <div className="headerPost">
                    <p className="titleForm">Tạo bài viết</p>
                    <span onClick={this.offFormArea} className="area-bt-close"><img src="../img/icon-close.png" alt="img button close form"></img></span>
                </div>
                <hr></hr>
                <div className="bodyPost">
                    <textarea value={this.state.content} id="textArea" onChange={this.contentChange} placeholder="Long ơi bạn đang nghĩ gì" className="ip-post"></textarea>
                    <div className="optionMore">
                        <p className="textOptionMore">Thêm vào bài viết</p>
                        <div className="area-button-ops">
                            <button className="bt-op addImg" title="Thêm ảnh" onClick={() => this.refs.fileInput.click()}><img src="../img/image.png" alt="img button add images"></img></button>
                            <button className="bt-op addFriends" title="Gắn thẻ"><img src="../img/tag.png" alt="img button tag friend"></img></button>
                        </div>
                    </div>
                    <input style={{ display: "none" }} id="file-upload" ref={this.fileInput} onChange={this.onChangeHandler} type="file" />
                    <button type="button" className="btn btn-post btn-block" onClick={this.onPost}>ĐĂNG BÀI</button>
                </div>
            </div>
        );
    }
}

export default FormCreateWork;