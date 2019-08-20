import React from 'react';
import NoteItem from '../components/NoteItem';
import List from '@material-ui/core/List';

function NoteList(props) {
    return (
        <List>
            {props.notes.map((note, index, noteTitle, noteContent) => {
                return (
                    <NoteItem 
                        note={note}
                        key={note.id}
                        index={index}
                        title={noteTitle}
                        content={noteContent}
                    />
                )
            })}
        </List>
    )
}

export default NoteList;