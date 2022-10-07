import s from'./Post.module.css';
import userPhoto from '../../../../assets/images/user.png';
import heartIcon from '../../../../assets/images/heart.svg'
import deleteIcon from '../../../../assets/images/delete.svg'

const Post = (props) =>{
    return (
        <div>
            <div className={s.postBody}>
                <div className={s.postBlock}> 
                    <div className={s.postInfo}>
                        <div className={s.postImage}>
                            <div className={s.postImageSmall}><img alt='Error' src={props.photos.small ? props.photos.small : userPhoto }></img></div>
                            <div>{props.fullName}</div>
                        </div>
                        <div className={s.postDelete} onClick={ ()=>props.delayPost(props.post.id) }> 
                            <img alt='Error' src={deleteIcon}></img> 
                        </div>
                    </div>
                    <div className={s.postText}>
                        {props.post.message}
                    </div>
                </div>
                <button onClick={()=>props.addLike(props.post.id)}  className={s.postLikes}>
                    <img alt='Error' src={heartIcon}></img>
                    <div>{props.post.likes}</div>
                </button>
            </div>
        </div>
    );
}
export default Post;