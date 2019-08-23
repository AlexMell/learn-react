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

const NoteItem = ({note, index, onClick}) => {

    const classes = useStyles();
    
    return (
        <ListItem key={index} button={true} onClick={event => onClick(note.id)}>
            <ListItemText 
                primary={`${note.noteTitle}`}
                className={classes.titleText}
            >
            </ListItemText>
            <ListItemSecondaryAction>
                <Button variant="contained" color="secondary">
                    <DeleteIcon></DeleteIcon>
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default NoteItem;