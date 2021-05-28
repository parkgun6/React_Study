import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoRead from "./TodoRead";
import { fetchPage } from "./todoSlice";

const TodoWrapper = () => {

    const page = useSelector(state => state.todo.page)

    const current = useSelector(state => state.todo.current)

    const dispatch = useDispatch()

    useEffect(() => {

        // 두번 호출한다.
        // if (page === 0) {
        //     dispatch(fetchPage(1))
        // } else {
        //     dispatch(fetchPage(page))
        // }

        dispatch(fetchPage(page))

    }, [page])

    return (
        <div>
            <h1>Todo Wrapper</h1>
            <div>
                <TodoInput></TodoInput>
            </div>
            <TodoList></TodoList>
            {current ? <TodoRead></TodoRead> : <></>}
        </div>
    );
}

export default TodoWrapper;