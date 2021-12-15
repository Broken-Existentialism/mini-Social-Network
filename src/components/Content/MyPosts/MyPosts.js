import s from'./MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) =>{
    let PostsDataArray = props.state.posts.map (elem => <Post message={elem.message} like={elem.likes} /> )
    let newPostElement = React.createRef()
    
    let addPost = () =>{
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div className={s.myPostsBlock}>
            <div className={s.theme}>
                <h3> My posts:</h3>
            </div>
            <div className={s.FormPost}>
                <div ClassName={s.TextArea}>
                    <textarea ref={newPostElement} placeholder="Что у вас нового?"></textarea>
                </div>
                <div ClassName={s.Button}>
                    <button  ClassName={s.ButtonPosts} onClick={addPost} >Add Post</button>
                </div>
            </div>
            <div className={s.PostBody}>
            {
                PostsDataArray
            }  
            </div>
        </div>
    );
}
export default MyPosts;