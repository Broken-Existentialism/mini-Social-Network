import s from './UserDescription.module.css';

const UserDescription = (props) =>{
    return(
        <div className={s.UserDescriptionBody}>
            <div className={s.userFullName}>
                
            </div>
            <div className={s.userAbout}>
                
            </div>
            <div className={s.userContacts}>
               
            </div>
            <div className={s.userJobStatus}>
                JobStatus
            </div>
        </div>
    )
}
export default UserDescription