import React from 'react';
import {Runner} from '../models/models';
import {Grid, Box} from '@material-ui/core';
import {useRunnerStyles, boxStyles} from '../styles/styles';
import {getRunnerStyleByStatus} from '../utils/utils';

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
                                <Box className={classes.card} {...boxStyles} {...getRunnerStyleByStatus(runner)} >
                                    <p>{runner.id}</p>
                                    <p>{runner.name}</p>
                                    <p>{runner.description}</p>
                                    <p>{runner.status}</p>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div >
    );
}

export default RunnerList;