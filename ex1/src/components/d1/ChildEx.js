import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

  const ChildEx = ({children}) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Paper elevation={0}>
            {children}
        </Paper>
        <Paper />
        <Paper elevation={3} />
      </div>
    );
}
 
export default ChildEx;