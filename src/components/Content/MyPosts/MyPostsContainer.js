import { connect } from "react-redux"
import { postChange, addPost, addLike, delayPost } from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts"

let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect (mapStateToProps, {
    addPost,
    postChange,
    addLike,
    delayPost,
})(MyPosts)

export default MyPostsContainer