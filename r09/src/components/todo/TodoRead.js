import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoRead = () => {

    const todo = useSelector(state => state.todo.current)
    const dispatch = useDispatch()
    const deleteFn = (todo) => {
        dispatch(deleteTodo(todo))
    }

    return (  
        <div>
            <h1>TodoRead {todo.tno} -- {todo.content}</h1>
            {/* value를 쓰면 무조건 onChange를 걸어줘야한다. */}
            <input type={'text'} defaultValue= {todo.title}></input>
            <input type={'text'} defaultValue= {todo.content}></input>
            <div>
                <button>UPDATE</button>
                <button onClick={() => deleteFn(todo)}>DELETE</button>
            </div>
        </div>
    );
}
 
export default TodoRead;
