import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import todolistReducer from "./todolist-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    todolistPage: todolistReducer,
})

let store = createStore(reducers)

export default store
