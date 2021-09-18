import React, { Component } from 'react';
import '../style/post/post.css'
import list_post from "../mockData/listPost"
import PostComponent from '../components/postComponents/PostComponent';
/**
 * class post with state active and listPost
 * active state to indentify li has active ?
 * listPost to contain list posts
 */
class Post extends Component {
    constructor() {
        super()
        this.state = { active: false, listPost: list_post, hasNewPost: null}
        this.renderPost = this.renderPost.bind(this)
    }
    //function renderPost() of post page 
    renderPost = () => {
        return this.state.listPost.map((item, key) =>
            <PostComponent key={key} urlImgUser={item.urlImgUser}
                nameUser={item.nameUser} timed={item.timed} content={item.content}
                imgUrlContent={item.imgUrlContent} numberApproach={item.numberApproach} numComment={item.numComment}
            ></PostComponent>)
    }
    //function createWork() to open form create work
    createWork = () => {
        this.props.onForm();
    }
    isHiddenScrollBar=()=>{
        if (this.state.isShowFormCreateWork) {
            document.body.classList.add("no-sroll")
        }
    }
    updateListPost=()=>{
        if(this.props.updatePost !==this.state.hasNewPost){
            this.setState({listPost: this.state.listPost.concat(this.props.updatePost)});
            this.state.hasNewPost=this.props.updatePost;
         }
    }
    render() {
        this.isHiddenScrollBar();
        this.updateListPost();
        return (
            <div className="post" >
                <div className="creactPost">
                    <span className="avt-user"><img src="../img/user-static.png" alt=""></img></span>
                    <button onClick={this.createWork} type="button">Tạo bài viết</button>
                    {/* {this.props.updatePost} */}
                </div>

                <div className="list-post">
                    {this.renderPost()}
                </div>
            </div>
        );
    }
}

export default Post;