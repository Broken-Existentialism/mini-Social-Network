import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage:{
            posts: [
                {id:1, message:'post-1', likes:'20'},
                {id:2, message:'post-2', likes:'30'},
                {id:3, message:'post-3', likes:'40'},
                {id:4, message:'post-4', likes:'50'}
            ],
            newPostText:''
        },
        dialogsPage: {
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
        },
        sidebarPage:{
            sidebar: [
                {name:"Alex", city:"London"},
                {name:"Alex", city:"London"},
                {name:"Alex", city:"London"},
                {name:"Alex", city:"London"}
            ]
        }
    },
    _callSubscriber(){
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber()
    }
}

export default store;