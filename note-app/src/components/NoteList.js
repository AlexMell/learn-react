import React from 'react';
import NoteItem from '../components/NoteItem';
import List from '@material-ui/core/List';

class NoteList extends React.Component {
    constructor(props) {
        super(props)
         
        this.state = {
            notes: props.notes
        }
    }

    render() {
        return (
            <List>
                {notes.map((note, index) => {
                    return (
                        <NoteItem 
                            note={note}
                            key={note.id}
                            index={index}
                            onClick={props.onClicked}
                        />
                    )
                })}
            </List>
        )
    }
}

export default NoteList;