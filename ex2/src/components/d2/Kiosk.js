import ExLayout from "./ExLayout";
import React from 'react';
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

const Kiosk = () => {

    const classes = useStyles();

    return ( 
        <ExLayout>
            <div className={classes.root}>
                <Paper elevation={5} />
                <Paper elevation={5} />
                <Paper elevation={5} />
            </div>
        </ExLayout>
     );
}
 

export default Kiosk ;