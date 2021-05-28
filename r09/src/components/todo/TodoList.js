import { useDispatch, useSelector } from "react-redux";
import PageList from "./PageList";
import { readTodo } from "./todoSlice";

const TodoList = () => {

    //props로 받을수있고 dtoList를 받을수도있다.
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const readFn = (tno) => {
        //console.log('readTodo',tno)
        dispatch(readTodo(tno))
    }

    const list = todos.dtoList.map(t => <li key={t.tno} onClick={() => readFn(t.tno)}>{t.tno} -- {t.title}</li>)

    return (  
        <div>
            {list}
            <PageList {...todos}></PageList>
        </div>
    );
}
 
export default TodoList;