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

const ProductList = ({products, addCart}) => {

    const list = products.map(p => {
        return (
            <Paper key={p.pno} elevation={5} onClick={() => addCart(p)}>
                <h3>{p.name}</h3>
                <small><b>{p.price}</b></small>
            </Paper>
        )
        })

    const classes = useStyles()

    return (  
        <div className={classes.root}>
            {list}
        </div>
    );
}
 
export default ProductList;