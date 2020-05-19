import React from 'react';
import {Runner} from '../models/models';
import {Grid, Box, Card} from '@material-ui/core';
import {useStyles} from '../styles/styles';

interface Props {
    runners: Runner[];
}

function RunnerList(props: Props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                <Grid container spacing={1}>
                    {props.runners.map((runner, index) => {
                        return (
                            <Grid item key={index} xs={2}>
                                <Card className={classes.card}>
                                    <p className={classes.content}>{runner.id}</p>
                                    <p className={classes.content}>{runner.name}</p>
                                    <p className={classes.content}>{runner.description}</p>
                                    <p className={classes.content}>{runner.status}</p>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div >
    );
}

export default RunnerList;