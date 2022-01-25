import s from'./ProfileInfo.module.css';
import userAvatar from '../../../assets/images/users1.jpg';

const Profile = (props) =>{
    return(
        <div className={s.ProfileInfoBlock}>
            <ProfileAvatar />
        </div>
    )
}
const ProfileAvatar = (props) =>{
    return (
        <div className={s.avatarBody}>
            <div className={s.avatarImage}>
                <img src={userAvatar}></img>
            </div>
            <div className={s.avatarDescription}>
                My Description
            </div>
        </div>
    )
}

export default Profile;
