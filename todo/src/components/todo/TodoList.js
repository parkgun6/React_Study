import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { getList, modifyTodo, removeTodo } from './todoService';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
}));

const TodoList = ({change}) => {
    const classes = useStyles();

    const todoList = getList()

    const list = todoList.map(todo => {

        return(
            <ListItem alignItems="flex-start" key={todo.id}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={() => {
                        modifyTodo(todo.id)
                        change()
                        }}/>
                </ListItemAvatar>
                <ListItemText
                    primary={todo.text}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                            {todo.complate?'DONE':'NOT YET'}
                            </Typography>
                            <Button onClick={() => {
                                removeTodo(todo.id)
                                change()
                            }}>Delete</Button>
                        </React.Fragment>
                    }
                />
            </ListItem>
        )
    })

    return (
        <List className={classes.root}>
            {list}
        </List>
    );
}
 
export default TodoList;