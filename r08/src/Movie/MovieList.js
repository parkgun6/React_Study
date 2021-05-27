import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1)
        },
    },
}));

const MovieList = () => {

    const movieList = useSelector(state => state.movie.movies)

    const classes = useStyles();

    //...은 스프레드연산자 모든 데이터가 다 들어간다.
    const list = movieList.map((m, i) => <MovieItem key={i} {...m}></MovieItem>)
    return (
        <div className={classes.root}>
            {list}
        </div>
    );
}

export default MovieList;