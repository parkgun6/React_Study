import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//외부에서 dispatch로 호출해야하기 때문에 export const
export const fetchPage = createAsyncThunk('todo/fetchPage', async (page) => {

    console.log("fetchPage", page)
    if (page == 0) {
        return null
    }
    const res = await axios.get('http://localhost:8080/todo/pages?page=' + page)

    return res.data
})

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {

    console.log("addTodo", todo)

    const res = await axios.post("http://localhost:8080/todo/", todo)

    return res.data
})

export const readTodo = createAsyncThunk('todo/read', async (tno) => {

    const res = await axios.get("http://localhost:8080/todo/" + tno)

    return res.data
})

export const deleteTodo = createAsyncThunk('todo/delete', async (todo) => { 

    //axios로 delete할때 주의사항 boot에서 dto로 받게 되어있다. {...todo}
    const res = await axios.delete("http://localhost:8080/todo/" + todo.tno, {data:{...todo}})
    
    return res.data
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        dtoList: [],
        page: 1,
        pageList: [],
        prev: false,
        next: false,
        start: 0,
        end: 0
    },
    //비동기 작업이아니라서 reducers에 선언
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: {
        [fetchPage.fulfilled]: (state, action) => {
            console.log("fetchPage.fulfilled", action)

            if (action.payload == null) {
                state.page = 1
                return state
            }

            //action의 payload자체가 state가 된다.
            return action.payload
        },
        [addTodo.fulfilled]: (state, action) => {
            console.log("addTodo.fulfilled", action)
            //state.page가 0이 되면서 리렌더링을 진행한다.
            state.page = 0
        },
        [readTodo.fulfilled]: (state, action) => {
            console.log("readTodo.fulfilled", action)
            state.current = action.payload
        },
        [deleteTodo.fulfilled]: (state, action) => {
            //action값은 success값만 온다.
            console.log("deleteTodo.fulfilled", action)
            state.page = 0
        }
    }
})

//reducers안에있는것을 호출
export const { changePage } = todoSlice.actions

export default todoSlice.reducer