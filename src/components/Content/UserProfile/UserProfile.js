import s from'./UserProfile.module.css';
import userAvatar from '../../../assets/images/users1.jpg';

const UserProfile = (props) =>{
    return(
        <div className={s.ProfileInfoBlock}>
            <div className={s.avatarBody}>
                <div className={s.avatarImage}>
                    <img src={userAvatar}></img>
                </div>
                <div className={s.avatarDescription}>
                    My Description
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
