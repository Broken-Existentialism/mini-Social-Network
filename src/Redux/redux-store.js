import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import todolistReducer from "./todolist-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import MusicReducer from "./music-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    todolistPage: todolistReducer,
    auth: authReducer,
    musicPage: MusicReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
