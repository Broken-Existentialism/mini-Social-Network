import post from'./Post.module.css';


const Post = (props) =>{
    return (
        <div>
            <div className={post.item}>
                <img src='https://sun9-35.userapi.com/impf/c845121/v845121408/2eaa1/dfGm9g_tPWQ.jpg?size=574x574&quality=96&sign=5a161c088d0c1bf15144f40d6639596a&type=album'></img>
                <div>
                    {props.message}
                </div>
                <div>
                    <span>Like {props.like}</span>
                </div>
            </div>
        </div>
    );
}
export default Post;