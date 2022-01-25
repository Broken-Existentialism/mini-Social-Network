const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT_CHANGE = 'NEW-POST-TEXT-CHANGE'
const ADD_LIKE = 'ADD_LIKE'
const DELAY_POST = 'DELAY_POST'
let stateInitialization = {
    posts: [],
    newPostText:''
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
        default: return state
    }
}

export const addPost= () =>({type: ADD_POST})

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
export default profileReducer