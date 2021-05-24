import { useEffect, useState } from "react";
import axios from "axios";
import PageList from "./PageList";

//page에 기본값을 1을 줬다. 자바는 못한다. 자바스크립트는 최근에 가능해졌다.
const TodoList = ({ page = 1 }) => {

    const [current, setCurrent] = useState(page)

    const [dtoList, setDtoList] = useState([])

    //const [pageList, setPageList] = useState([])
    const [resultDTO, setResultDTO] = useState({
        pageList:[]
    })

    const movePage = (num) => {
        setCurrent(num)
    }

    //useEffect 사용으로 setDtoList가 한번만 호출된다.
    useEffect(() => {
        axios.get("http://localhost:8080/todo/pages?page=" + current)
            .then(res => {
                //console.log(res.data)

                setDtoList(res.data.dtoList)

                //setPageList(res.data.pageList)
                setResultDTO(res.data)
            })

        //한번만 호출하고자 한다면 []를 꼭 붙여야한다.    
    }, [current])

    const list = dtoList.map(todo => <li key={todo.tno}>{todo.tno} -- {todo.title}</li>)
    //const pageButtons = pageList.map(i => <button key={i} onClick={() => setCurrent(i)}>{i}</button>)

    return (
        <div>
            <ul>
                {list}
            </ul>

            {/* <div>
                {pageButtons}
            </div> */}

            {/* ... 스프레드연산자 한번에 여러개의 속성을 준다 */}
            <PageList {...resultDTO} movePage={movePage}></PageList>
        </div>
    );
}

export default TodoList;