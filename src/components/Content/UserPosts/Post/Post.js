import s from'./Post.module.css';
import userPhoto from '../../../../assets/images/users1.jpg';
import heartIcon from '../../../../assets/images/heart.svg'
import deleteIcon from '../../../../assets/images/delete.svg'

const Post = (props) =>{
    return (
        <div>
            <div className={s.postBody}>
                <div className={s.postBlock}> 
                    <div className={s.postInfo}>
                        <div className={s.postImage}>
                            <div><img src={props.photos.small}></img></div>
                            <div>{props.fullName}</div>
                        </div>
                        <div className={s.postDelete} onClick={ ()=>props.delayPost(props.post.id) }> 
                            <img src={deleteIcon}></img> 
                        </div>
                    </div>
                    <div className={s.postText}>
                        {props.post.message}
                    </div>
                </div>
                <button onClick={()=>props.addLike(props.post.id)}  className={s.postLikes}>
                    <img src={heartIcon}></img>
                    <div>{props.post.likes}</div>
                </button>
            </div>
        </div>
    );
}
export default Post;