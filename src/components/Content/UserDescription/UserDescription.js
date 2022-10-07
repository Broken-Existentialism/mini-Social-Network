import s from './UserDescription.module.css';


const UserDescription = (props) =>{

    if(!props.profile){
        return <div className={s.UserDescriptionBody}></div>
    }

    let contacts = []
    let contactsObj = props.profile.contacts
    for (let obj in contactsObj){
        if(contactsObj[obj]){
            contacts.push(obj)
        }
    }
    
    return(
        <div className={s.UserDescriptionBody}>
            <div className={s.userFullName}>
                {props.profile.fullName}
            </div>
            <div className={s.userAbout}>
                {props.profile.aboutMe}
            </div>
            <div className={s.userContacts}>
               {
                   contacts.map (contact => {
                       return(
                           <div>{`${contact}: ${contactsObj[contact]}`}</div>
                       )
                   })
               }
            </div>
            <div className={s.userJobStatus}>
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    )
}
export default UserDescription