import React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';

const headerStyle = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

const NoteBar = () => {
    
    const classes = headerStyle();

    return (
        <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.title}>
                Notes:
            </Typography>
        </Toolbar>
    )
}

export default NoteBar;