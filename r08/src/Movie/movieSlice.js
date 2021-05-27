import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//service로 따로 분리하는경우도 있다.
const fetchMoviesFn = async () => {
    const res = await axios.get("http://localhost:8080/getMovies")
    return res.data
}

const checkMovieFn = async () => {
    const res = await axios.get("http://localhost:8080/todo/now")
    return res.data
}

//component가 fetchMovies를 호출하기 때문에 export
export const fetchMovies = createAsyncThunk('movie/fetch', fetchMoviesFn)

export const checkMovie = createAsyncThunk('movie/checkMovie', checkMovieFn)


//Slice는 무조건 소문자로 시작한다.
export const movieSlice = createSlice({

    name: "MovieSlice",
    //global State로 관리되는 것
    initialState: {
        movies: [],
        msg: ''
    },
    
    reducers: {
        clearMsg: (state) => {
            state.msg = ''
        }
    },
    //옵션이다. 비동기처리시엔 필요하다.
    extraReducers: {
        [fetchMovies.fulfilled]: (state, action) => {
            //console.log(action)
            //console.log(action.payload.Movies.Items[0].Items)
            state.movies = action.payload.Movies.Items[0].Items
        },
        [checkMovie.fulfilled]: (state, action) => {
            console.log(action)
            state.msg = 'Complated......'
        }
    }
})

export const {clearMsg} = movieSlice.actions

export default movieSlice.reducer