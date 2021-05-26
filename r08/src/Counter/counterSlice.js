import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name:'Counter',
    initialState: {
        count:10
    },
    reducers: {
        //함수가 액션을 대신한다.
        inc: (state, action) => {
            console.log("inc")
            state.count += 1
        },
        dec: (state) => {
            console.log("dec")
            state.count -= 1
        }
    }

})

export const { inc,dec } = counterSlice.actions

export const countValue = state => state.counter.count

export default counterSlice.reducer
