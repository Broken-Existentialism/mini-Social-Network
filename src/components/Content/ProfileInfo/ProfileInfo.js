import s from'./ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return(
        <div className={s.ProfileInfoBlock}>
            <ProfileAvatar />
        </div>
    )
}
const ProfileAvatar = (props) =>{
    return (
        <div className={s.avatarBody}>
            <div className={s.avatar}>
                <img src='https://sun9-88.userapi.com/impg/8f8EwQqc41bI2EjuehbuBVMCnecyffZbAfvgFA/XumOviX0KuE.jpg?size=640x800&quality=96&sign=929faace9941eadefc624925c2251cd1&type=album'></img>
            </div>
            <div className={s.description}>
                My Description
            </div>
        </div>
    )
}

export default ProfileInfo;
