import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./movieSlice";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieList from "./MovieList";
import MsgPanel from "./MsgPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

const MovieBoard = () => {
    const classes = useStyles();

    //redux에있기 때문에 dispatch
    const dispatch = useDispatch()

    //useEffect가 비동기이다.
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    //처음 실행시 비동기라서 빈 상태였다가 채워지고 나서 state를 다시 갱신하기때문에
    //처음엔 빈배열([])로 나오고 그 다음에 채워진 배열이 나온다.
    //console.log("-------------------------------")
    //console.log(movieList)

    return (
        <div className={classes.root}>
            <MsgPanel></MsgPanel>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MovieList></MovieList>
                </Grid>
                <Grid item xs={0}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default MovieBoard;
