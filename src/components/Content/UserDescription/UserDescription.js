import s from './UserDescription.module.css';

const UserDescription = (props) =>{
    return(
        <div className={s.UserDescriptionBody}>
            <div className={s.userFullName}>
                FullName
            </div>
            <div className={s.userAbout}>
                About
            </div>
            <div className={s.userContacts}>
                Contacts
            </div>
            <div className={s.userJobStatus}>
                JobStatus
            </div>
        </div>
    )
}
export default UserDescription