import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NoteList from './components/NoteList';
import NoteBar from './components/NoteBar';
import NoteEdit from './components/NoteEdit';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '30px',
        paddingBottom: '30px'
    }
}))

const notes = [
    {
        id: '1',
        noteTitle: 'Title 1',
        noteContent: "Note 1 Content asdsad"
    },
    {
        id: '2',
        noteTitle: 'Title 2',
        noteContent: "Note 2 Contenting asdsad"
    },
    {
        id: '3',
        noteTitle: 'Title3 ',
        noteContent: "Note3  Contentasdasdsa asdsad"
    }
];

localStorage.setItem("notes", JSON.stringify(notes));
var storedNames = JSON.parse(localStorage.getItem("notes"));

function App() {

    const classes = useStyles();

    function clickedId(id) {
        var asd = id;
        return asd;
    }


    return (
        <React.Fragment>
            <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper>
                            <NoteBar />
                            <NoteList notes={storedNames} onClicked={clickedId} />
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper>
                            <NoteEdit title={notes} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );  
}

export default App;
