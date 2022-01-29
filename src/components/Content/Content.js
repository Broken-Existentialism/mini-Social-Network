import React from 'react';
import s from './Content.module.css';

import { connect } from 'react-redux';
import { postChange, addPost, addLike, delayPost } from "../../Redux/profile-reducer"

import UserDescription from './UserDescription/UserDescription';
import UserProfile from './UserProfile/UserProfile';
import UserPosts from './UserPosts/UserPosts';

class ContentAPI extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className={s.ContentBody}>
                <UserProfile />
                <div className={s.ContentBlock}>
                    <UserDescription />
                    <UserPosts 
                        posts = {this.props.posts}
                        newPostText = {this.props.newPostText}
                        addPost ={this.props.addPost}
                        postChange ={this.props.postChange}
                        addLike = {this.props.addLike}
                        delayPost = {this.props.delayPost}
                    />
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const ContentContainer = connect(mapStateToProps, {
    addPost,
    postChange,
    addLike,
    delayPost,
})(ContentAPI)

export default ContentContainer;