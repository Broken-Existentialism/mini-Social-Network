
const CHANGE_TEXT = 'CHANGE_TEXT'

let stateInitialization = {
    musicText: 'TEST'
}

const MusicReducer = (state = stateInitialization, action) =>{
    switch(action.type){
        case CHANGE_TEXT:
            return{
                ...state,
                musicText: action.musicText
            }
        default: return state
    }
}

export const textChange = (musicText) =>{
    return{
        type: CHANGE_TEXT,
        musicText,
    }
}

export default MusicReducer