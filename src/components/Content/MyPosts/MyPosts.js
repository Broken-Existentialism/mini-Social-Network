import s from'./MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) =>{
    let onAddPost = () =>{
        props.addPost()
    }

    let onPostChange = (e) =>{
        let text = e.target.value
        props.postChange(text)
    }
    return (
        <div className={s.myPostsBlock}>
            <div className={s.theme}>
                <h3> My posts:</h3>
            </div>
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
export default MyPosts;