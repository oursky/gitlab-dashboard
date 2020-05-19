import React from 'react';
import clsx from 'clsx';
import {ProjectViewModel, PipelineStatus} from '../models/models';
import {Grid, Box, Card} from '@material-ui/core';
import {useStyles} from '../styles/styles';
import {truncatedText, displayDateFromNow} from '../utils/utils';

interface Props {
    projectsView: ProjectViewModel[];
}

function PipelineProjectGenericView(props: Props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={1}>
                {props.projectsView.map((project, index) => {
                    return (
                        <Grid item key={index}>
                            <Box className={classes.box}>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                        <Card className={`${classes.card} ${classes.projectNameCard}`}>{project.name}</Card>
                                    </Grid>
                                    {project.pipelines.map((pipeline, index) => {
                                        return (
                                            <Grid item key={index} xs={2}>
                                                <Card className={clsx(classes.card, classes.pipelineCard, {[classes.cardSuccess]: pipeline.status === PipelineStatus.SUCCESS}, {[classes.cardFailed]: pipeline.status === PipelineStatus.FAILED}, {[classes.cardPending]: pipeline.status === PipelineStatus.PENDING}, {[classes.cardRunning]: pipeline.status === PipelineStatus.RUNNING})}>
                                                    <p className={classes.content}># {pipeline.id}</p>
                                                    <p className={clsx(classes.content, classes.smallContent)}>{pipeline.commitId.slice(0, 8)} {truncatedText(pipeline.branchRef, 10)}</p>
                                                    <p className={classes.content}>{truncatedText(pipeline.commitMessage, 18)}</p>
                                                    <p className={classes.content}>{truncatedText(pipeline.commitAuthor, 18)}</p>
                                                    <p className={classes.content}>{pipeline.finishedAt ? displayDateFromNow(pipeline.finishedAt) : ""}</p>
                                                </Card>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    );
}

export default PipelineProjectGenericView;
