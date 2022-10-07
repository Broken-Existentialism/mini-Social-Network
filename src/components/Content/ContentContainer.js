import React from 'react';
import s from './ContentContainer.module.css';

import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    postChange, 
    addPost, 
    addLike, 
    delayPost, 
    getProfileThunkCreator
} from "../../Redux/profile-reducer"

import UserDescription from './UserDescription/UserDescription';
import UserProfile from './UserProfile/UserProfile';
import UserPosts from './UserPosts/UserPosts';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ContentAPI extends React.Component {
    
    componentDidMount(){
        let userID = this.props.match.params.userID
        if(!userID){
            userID = 22655
        }
        this.props.getProfileThunkCreator(userID)
    }

    render(){
       
        return(
            <>
                {this.props.isFetching 
                    ?<Preloader/>
                    :<div className={s.ContentBody}>
                        <UserProfile 
                            photos={this.props.profile.photos}
                        />
                        <div className ={s.ContentBlock}>
                            <UserDescription 
                                profile ={this.props.profile}
                            />
                            <UserPosts
                                photos={this.props.profile.photos}
                                fullName={this.props.profile.fullName}
                                posts ={this.props.posts}
                                newPostText ={this.props.newPostText}
                                addPost ={this.props.addPost}
                                postChange ={this.props.postChange}
                                addLike ={this.props.addLike}
                                delayPost ={this.props.delayPost}
                            />
                        </div>
                    </div>
                }
            </>
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

/*
let AuthRedirectComponent = withAuthRedirect(ContentAPI)

const ContentRouterContainer = withRouter(AuthRedirectComponent)

const ContentContainer = connect(mapStateToProps, {
    addPost,
    postChange,
    addLike,
    delayPost,
    getProfileThunkCreator,
})(ContentRouterContainer)
*/
export default compose(
    connect(mapStateToProps, {
        addPost,
        postChange,
        addLike,
        delayPost,
        getProfileThunkCreator,
    }),
    withRouter,
    withAuthRedirect
)(ContentAPI)