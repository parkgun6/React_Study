import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../Counter/counterSlice";

export default configureStore({
    //combine
    reducer: {
        counter:counterSlice
    },
})