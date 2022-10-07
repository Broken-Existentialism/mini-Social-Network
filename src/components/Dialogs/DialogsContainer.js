//import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessageActionCreater, addNewMessageTextChangeActionCreater } from '../../Redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer ;