import s from'./UserProfile.module.css';
import userAvatar from '../../../assets/images/users1.jpg';
import UserProfileStatus from './UserProfileStatus/UserProfileStatus';
//import userAvatarTwo from '../../../assets/images/users2.jpg';

const UserProfile = (props) =>{
    return(
        <div className={s.ProfileInfoBlock}>
            <div className={s.avatarBody}>
                <div className={s.avatarImage}>
                    <img alt='Error' src={props.photos?.large ? props.photos?.large : userAvatar }></img>
                </div>
                <UserProfileStatus />
            </div>
        </div>
    )
}

export default UserProfile;
