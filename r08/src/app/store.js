import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../Counter/counterSlice";
import movieSlice from '../Movie/movieSlice';

export default configureStore({
    //combine
    reducer: {
        counter:counterSlice,
        movie: movieSlice
    },
})