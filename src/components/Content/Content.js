import s from'./Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './ProfileInfo/ProfileInfo';

const Content = () =>{
    return (
        <div className={s.ContentBody}>
            <Profile />
            <MyPostsContainer />
        </div>
    );
}
export default Content;