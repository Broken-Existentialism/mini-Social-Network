import React from 'react';
import s from './ContentContainer.module.css';

import { connect } from 'react-redux';
import { postChange, addPost, addLike, delayPost, setUserProfile} from "../../Redux/profile-reducer"

import UserDescription from './UserDescription/UserDescription';
import UserProfile from './UserProfile/UserProfile';
import UserPosts from './UserPosts/UserPosts';
import axios from 'axios';

class ContentAPI extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
        .then(response =>{
            this.props.setUserProfile(response.data)
        })
    }
    render(){
        return(
            <div className={s.ContentBody}>
                    <UserProfile 
                       photos={this.props.profile?.photos}
                    />
                    <div className ={s.ContentBlock}>
                        <UserDescription 
                            profile ={this.props.profile}
                        />
                        <UserPosts
                            photos={this.props.profile?.photos}
                            fullName={this.props.profile?.fullName}
                            posts ={this.props.posts}
                            newPostText ={this.props.newPostText}
                            addPost ={this.props.addPost}
                            postChange ={this.props.postChange}
                            addLike ={this.props.addLike}
                            delayPost ={this.props.delayPost}
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
        profile: state.profilePage.profile,
    }
}

const ContentContainer = connect(mapStateToProps, {
    addPost,
    postChange,
    addLike,
    delayPost,
    setUserProfile,
})(ContentAPI)

export default ContentContainer;