import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) =>{

    let DialogItemUsersArray = props.dialogs.map ( elem => <DialogItem name={elem.name} key={elem.id} id={elem.id} />)
    let MessagesDataArray = props.messages.map ( elem => <Message message = {elem.message} key={elem.id}/>)
    
    let onAddMessage = ()=>{
        props.addMessage()
    }

    let onNewMessageChange = (e)=>{
        let text = e.target.value
        props.newMessageChange(text)
    }

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
                <textarea onChange={onNewMessageChange} value={props.newMessageText}></textarea>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;