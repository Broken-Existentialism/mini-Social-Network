import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) =>{
    let DialogItemUsersArray = props.state.dialogs.map ( elem => <DialogItem name={elem.name} id={elem.id} />)
    let MessagesDataArray = props.state.messages.map ( elem => <Message message = {elem.message} />)
    return (
        <div className={s.dialogsBody}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {
                    DialogItemUsersArray
                    }
                </div>
                <div className={s.messages}>
                {
                    MessagesDataArray
                }
                </div>
            </div>
            <div className={s.dialogsForm}>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;