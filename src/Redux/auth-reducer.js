import { getAuth } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'

let stateInitialization = {
    userId: null,
    email: null,
    login: null,
    isFetching: null,
    isAuth: false
}

const authReducer = (state = stateInitialization, action) =>{
    switch(action.type){
        case SET_USERS_DATA: 
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default: return state
    }
    
}

export const setAuthUserData = (userId, email, login) =>{
    return{
        type: SET_USERS_DATA,
        data: {
            userId,
            email,
            login,
        }
    }
}

export const getAuthThunkCreator = () =>{
    return(
        (dispatch) =>{
            getAuth()
            .then(data =>{
                if(data.resultCode === 0){
                    let {id, email, login} = data.data
                    console.log({id, email, login})
                    dispatch(setAuthUserData(id, email, login))
                }
            })
        }
    )
}

export default authReducer