import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: '20px',
            },
        },
    }),
);

function Progress() {
    const classes = useStyles();

    return <div className={classes.root}><LinearProgress /></div>;
}

export default Progress;