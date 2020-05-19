import React from 'react';
import clsx from 'clsx';
import {Runner} from '../models/models';
import {Grid, Box, Card} from '@material-ui/core';
import {useRunnerStyles} from '../styles/styles';

interface Props {
    runners: Runner[];
}

function RunnerList(props: Props) {
    const classes = useRunnerStyles();
    return (
        <div className={classes.root}>
            <Box>
                <Grid container spacing={1}>
                    {props.runners.map((runner, index) => {
                        return (
                            <Grid item key={index} xs={2}>
                                <Card className={classes.card}>
                                    <p>{runner.id}</p>
                                    <p>{runner.name}</p>
                                    <p>{runner.description}</p>
                                    <p>{runner.status}</p>
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