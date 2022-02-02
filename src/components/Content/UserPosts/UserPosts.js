import s from'./UserPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const UserPosts = (props) =>{
    let onAddPost = () =>{
        props.addPost()
    }
    let onPostChange = (e) =>{
        let text = e.target.value
        props.postChange(text)
    }
    return (
        <div className={s.myPostsBlock}>
            <div className={s.FormPost}>
                <div className={s.TextArea}>
                    <textarea  onChange={onPostChange} placeholder='Enter value...' value={props.newPostText}/>
                </div>
                <div className={s.Button}>
                    <button  className={s.ButtonPosts} onClick={onAddPost} >Add Post</button>
                </div>
            </div>
            <div className={s.PostBody}>
            {
                props.posts.map (post => <Post
                        fullName = {props.fullName}
                        photos = {props.photos}
                        key={post.id} 
                        post={post}
                        addLike={props.addLike}
                        delayPost={props.delayPost}
                    /> )
            }  
            </div>
        </div>
    );
}
export default UserPosts;