const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let stateInitialization = {
    dialogs: [
        {name:'Alex', id:'1' },
        {name:'Lex', id:'2'},
        {name:'John', id:'3'},
        {name:'Constantin', id:'4'},
        {name:'Fyodor', id:'5'}
    ],
    messages: [
        {id:'1', message:'Hi I am Component'},
        {id:'2', message:'How are you?'},
        {id:'3', message:'I like you'},
        {id:'4', message:'I like you'},
        {id:'5', message:'I like you'}
    ],
    newMessageText:''
}

const dialogsReducer = (state = stateInitialization, action) =>{
    switch(action.type){
        case NEW_MESSAGE_TEXT: 
            return  {
                ...state,
                newMessageText: action.newMessageText
            }
        case ADD_MESSAGE: 
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: state.newMessageText}]
            }
        default: return state
    }
}

export const addNewMessageTextChangeActionCreater = (text) =>{
    return {
        type: NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export const addMessageActionCreater = () => ({type: ADD_MESSAGE})

export default dialogsReducer