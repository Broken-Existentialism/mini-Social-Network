import style from'./Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) =>{
    return (
        <div className={style.ContentBody}>
            <ProfileInfo/>
            <MyPosts state={props.state} />
        </div>
    );
}
export default Content;