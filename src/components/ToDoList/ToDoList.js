import ToDoItem from './ToDoItem/ToDoItem';
import s from './ToDoList.module.css';

const ToDoList = (props) =>{
    return(
        <div className={s.ToDoListBody}>

            <div className={s.ToDoHeader}><h1>Список задач: {props.todoArray.length}</h1></div>
            
            <div className={s.ToDoListForm}>
                <textarea onChange={(e) => props.changeToDoText(e.target.value)} placeholder='Введите задачу...'  value={props.todoText}></textarea>
                <button onClick={props.todoText ? props.addToDoItem : ''}>Сохранить</button>
            </div>

           <div className={s.ToDoListItems}>
               {
                   props.todoArray.map (e => <ToDoItem 
                        key = {e.id}
                        todo = {e}
                        delayToDoItem ={props.delayToDoItem}
                        changeIsComplete = {props.changeIsComplete}
                    />)
               }
           </div>
           
        </div>
    )
}

export default ToDoList