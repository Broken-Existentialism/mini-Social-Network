import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import { changeToDoText, addToDoItem, delayToDoItem, changeIsComplete} from '../../Redux/todolist-reducer';
let mapStateToProps = (state) =>{
    return{
        todoText: state.todolistPage.todoText,
        todoArray: state.todolistPage.todoArray,
    }
}

const ToDoListContainer = connect(mapStateToProps, {
    changeToDoText,
    addToDoItem,
    delayToDoItem,
    changeIsComplete,
})(ToDoList)

export default ToDoListContainer