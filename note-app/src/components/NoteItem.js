import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    titleText: {
        marginLeft: '20px'
    },
}));

const NoteItem = ({note, index, noteTitle}) => {

    const classes = useStyles();
    
    return (
        <ListItem key={index} button>
            <ListItemText 
                primary={`${note.noteTitle} ${index + 1}`}
                className={classes.titleText}
            />
            <ListItemSecondaryAction>
                <Button variant="contained" color="secondary">
                    <DeleteIcon></DeleteIcon>
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default NoteItem;