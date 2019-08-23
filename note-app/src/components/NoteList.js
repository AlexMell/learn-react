import React from 'react';
import NoteItem from '../components/NoteItem';
import List from '@material-ui/core/List';

function NoteList (props) {
    return (
        <List>
            {props.notes.map((note, index) => {
                return (
                    <NoteItem 
                        note={note}
                        key={note.id}
                        index={index}
                        onClick={props.handleClick}
                    />
                )
            })}
        </List>
    )
}

export default NoteList;