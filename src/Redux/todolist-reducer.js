const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
const CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT'
const DELAY_TODO_ITEM = 'DELAY_TODO_ITEM'
const CHANGE_IS_COMPLETE = 'CHANGE_IS_COMPLETE'

let stateInitialization = {
   todoArray: [],
   todoText: '',
   isComplete: false
}
const todolistReducer = (state = stateInitialization, action) =>{
    switch(action.type){
        case CHANGE_TODO_TEXT:
            return{
                ...state,
                todoText: action.todoText
            }
        case ADD_TODO_ITEM:
            return{
                ...state,
                todoText: '',
                todoArray: [...state.todoArray, {id:Math.random().toString(36).slice(2,9) , todoText: state.todoText, isComplete: false}]
            }
        case DELAY_TODO_ITEM:
            return{
                ...state, 
                todoArray: [...state.todoArray.filter(e => e.id !== action.itemID)]
            }
        case CHANGE_IS_COMPLETE:
            return{
                ...state,
                todoArray: state.todoArray.map (todoObj =>{
                    if(todoObj.id === action.itemID){
                        return{
                            ...todoObj,
                            isComplete: !todoObj.isComplete,
                        }
                    }
                    return todoObj
                })
            }
        default: return state
    }
}

export const changeToDoText = (todoText) =>{
    return{
        type: CHANGE_TODO_TEXT,
        todoText: todoText
    }
}
export const addToDoItem = () =>({type: ADD_TODO_ITEM})

export const delayToDoItem = (itemID) =>{
    return{
        type: DELAY_TODO_ITEM,
        itemID: itemID,
    }
}
export const changeIsComplete = (itemID) =>{
    return{
        type: CHANGE_IS_COMPLETE,
        itemID: itemID,
    }
}

export default todolistReducer