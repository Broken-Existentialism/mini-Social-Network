const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERT_COUNT = 'SET_TOTAL_USERT_COUNT'
const SET_IS_FETCHING = 'SET_ISFETCHING'

let stateInitialization = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = stateInitialization, action) =>{
    switch(action.type){
        case SET_USERS:
            return{
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map (usersObj => {
                    if(usersObj.id === action.userId){
                        return{
                            ...usersObj,
                            followed: true
                        }
                    }
                    return usersObj
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(usersObj =>{
                    if(usersObj.id === action.userId){
                        return{
                            ...usersObj,
                            followed: false
                        }
                    }
                    return usersObj
                })
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERT_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default: return state
    }
}

export const follow = (userId) =>{
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) =>{
    return{
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users) =>{
    return{
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (currentPage) =>{
    return{
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
export const setTotalUsersCount = (totalUsersCount) =>{
    return{
        type: SET_TOTAL_USERT_COUNT,
        totalUsersCount: totalUsersCount,
    }
}
export const setIsFetching = (isFetching) =>{
    return{
        type: SET_IS_FETCHING,
        isFetching: isFetching,
    }
}


export default usersReducer 