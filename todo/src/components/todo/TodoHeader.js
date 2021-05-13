import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';
import { addTodo } from './todoService';


function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const TodoHeader = ({change}) => {

    //입력을 하면 무조건 state, onChange
    //기본값은 공백
    const [text, setText] = useState('')


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //모달창에 있는 내용
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                
                {/* TextField는 input태그처럼 사용가능하다. */}
                <TextField value={text} onChange={(e) => { setText(e.target.value)}}></TextField>
                <Button onClick={() => {
                    addTodo(text)
                    setText('')
                    change()
                    handleClose()
                    } }>ADD</Button>
            </p>
        </div>
    );
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
        </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default TodoHeader;