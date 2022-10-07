import ToDoList from "./ToDoList";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { changeToDoText, addToDoItem, delayToDoItem, changeIsComplete} from '../../Redux/todolist-reducer';

let mapStateToProps = (state) =>{
    return{
        todoText: state.todolistPage.todoText,
        todoArray: state.todolistPage.todoArray,
    }
}

const AuthRedirectComponent = withAuthRedirect(ToDoList)

const ToDoListContainer = connect(mapStateToProps, {
    changeToDoText,
    addToDoItem,
    delayToDoItem,
    changeIsComplete,
})(AuthRedirectComponent )

export default ToDoListContainer