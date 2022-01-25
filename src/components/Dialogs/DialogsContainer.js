import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, addNewMessageTextChangeActionCreater } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) =>{
    return{
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
            newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
            addMessage: () =>{
                dispatch(addMessageActionCreater())
            },
            newMessageChange: (text) =>{
                dispatch(addNewMessageTextChangeActionCreater(text))
            }
    }
}

const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer ;