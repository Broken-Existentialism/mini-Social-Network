import s from './ToDoItem.module.css';
const ToDoItem = (props) =>{
    return(
        <div className={s.ToDoItemBody}>
            <div onClick={()=> props.changeIsComplete(props.todo.id)} className={ props.todo.isComplete ? s.ToItemStrike : s.ToDoItemText}> {props.todo.todoText}</div>
            <div onClick={() =>props.delayToDoItem(props.todo.id)} className={s.ToDoItemDelay}>X</div>
        </div>
    )
}

export default ToDoItem