import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

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

//webstorm에서는 rsc, VSCode는 sfc
const ExLayout = ({children}) => {

    const classes = useStyles();

    return (
        <Container fixed>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Header</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Content
                    {children}
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Footer</Paper>
            </Grid>
        </Grid>
        </Container>
    );
}

export default ExLayout;