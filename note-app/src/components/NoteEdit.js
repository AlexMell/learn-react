import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    title: {
        padding: '15px 20px'
    },
    textarea: {
        width: '100%',
        border: '1px solid #272c35',
        padding: '15px 20px',
        fontSize: '16px',
        background: 'transparent',
        boxSizing: 'border-box'
    }
}));

const NoteEdit = () => {

    const classes = useStyle();
    
    return (
        <div>
            <Typography variant="h5" className={classes.title}>
                Title
            </Typography>
            <TextareaAutosize
                className={classes.textarea}
                defaultValue="Default Text"
            />
        </div>
    );
}

export default NoteEdit;