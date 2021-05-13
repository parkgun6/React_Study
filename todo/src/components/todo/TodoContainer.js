import { useState } from "react";
import ExLayout from "./ExLayout";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

 const TodoContainer = () => {

    //state가 바뀌면 false에서 true값으로 바뀐다. 기본값은 false
    const [refresh, setRefresh] = useState(false)

    const change = () => {
        setRefresh(!refresh)
    }

    return (  
        <ExLayout>
            <TodoHeader change={change}></TodoHeader>
            <TodoList change={change}></TodoList>
        </ExLayout>
    );
 }
  
 export default TodoContainer;