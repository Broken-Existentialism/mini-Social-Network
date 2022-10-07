import { getProfile } from "../api/api"

const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT_CHANGE = 'NEW-POST-TEXT-CHANGE'
const ADD_LIKE = 'ADD_LIKE'
const DELAY_POST = 'DELAY_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_IS_FETCHING_PROFILE ='SET_IS_FETCHING_PROFILE'
//const SET_EDIT_MODE = 'SET_EDIT_MODE'

let stateInitialization = {
    posts: [],
    newPostText:'',
    profile: {},
    isFetching: false,
    //editMode: false,
}

const profileReducer = (state = stateInitialization, action) =>{
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: Math.random().toString(36).slice(2,9), message: state.newPostText, likes: 0}]
            }
        case NEW_POST_TEXT_CHANGE:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case ADD_LIKE:
            return{
                ...state,
                posts: state.posts.map (postsObj =>{
                    if(postsObj.id === action.itemID){
                        return{
                            ...postsObj,
                            likes: postsObj.likes + 1,
                        }
                    }
                    return postsObj
                })
            }
        case DELAY_POST:
            return{
                ...state,
                posts: [...state.posts.filter (post => post.id !== action.itemID)]
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
        case SET_IS_FETCHING_PROFILE:
            return{
                ...state,
                isFetching:action.isFetching
            }
        /*
        case SET_EDIT_MODE:
            return{
                ...state,
                editMode: action.editMode
            }
        */
        default: return state
    }
}

export const addPost = () =>({type: ADD_POST})

export const postChange = (text) =>{
    return {
        type: NEW_POST_TEXT_CHANGE,
        newPostText: text
    }
}
export const addLike = (itemID) =>{
    return{
        type: ADD_LIKE,
        itemID: itemID,
    }
}
export const delayPost = (itemID) =>{
    return{
        type: DELAY_POST,
        itemID: itemID,
    }
}
export const setUserProfile = (profile) =>{
    return{
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setIsFetchingProfile = (isFetching) =>{
    return{
        type: SET_IS_FETCHING_PROFILE,
        isFetching: isFetching
    }
}
/*
export const setEditMode = (editMode) =>{
    return{
        type: SET_EDIT_MODE,
        editMode,
    }
}
*/
export const getProfileThunkCreator = (userId) =>{
    return(
        (dispatch) =>{
            dispatch(setIsFetchingProfile(true))
            getProfile(userId)
            .then(data =>{
                dispatch(setUserProfile(data))
                dispatch(setIsFetchingProfile(false))
            })
        }
    )
}

export default profileReducer