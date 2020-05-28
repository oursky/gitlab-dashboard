import React, {useEffect} from 'react';
import clsx from 'clsx';
import {ProjectViewModel, PipelineJobStatus} from '../models/models';
import {Grid, Box, Card, CardActionArea, Tooltip} from '@material-ui/core';
import {useStyles} from '../styles/styles';
import {truncatedText, displayDateFromNow, redirectToWebsite} from '../utils/utils';

interface Props {
    projectsView: ProjectViewModel[];
}

function PipelineProjectGenericView(props: Props) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={1}>
                {props.projectsView.map((projectView, index) => {
                    return (
                        <Grid item key={index}>
                            <Box className={classes.box}>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                        <Card>
                                            <CardActionArea className={`${classes.card} ${classes.projectNameCard}`} onClick={() => {redirectToWebsite(projectView.project.webUrl)}}>
                                                {projectView.project.name}
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    {projectView.pipelines.map((pipelineView, index) => {
                                        return (
                                            <Grid item key={index} xs={2}>
                                                <Tooltip
                                                    title={
                                                        <div>
                                                            {pipelineView.jobs.map((job, index) => {
                                                                return (
                                                                    <div>
                                                                        {job.name}: {job.status}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    }
                                                >
                                                    <Card className={clsx(classes.card, classes.pipelineCard, {[classes.cardSuccess]: pipelineView.pipeline.status === PipelineJobStatus.SUCCESS}, {[classes.cardFailed]: pipelineView.pipeline.status === PipelineJobStatus.FAILED}, {[classes.cardPending]: pipelineView.pipeline.status === PipelineJobStatus.PENDING}, {[classes.cardRunning]: pipelineView.pipeline.status === PipelineJobStatus.RUNNING})}>
                                                        <CardActionArea onClick={() => {redirectToWebsite(pipelineView.pipeline.webUrl)}}>
                                                            <p className={classes.content}># {pipelineView.pipeline.id}</p>
                                                            <p className={clsx(classes.content, classes.smallContent)}>{pipelineView.pipeline.commitId.slice(0, 8)} {truncatedText(pipelineView.pipeline.branchRef, 10)}</p>
                                                            <p className={classes.content}>{truncatedText(pipelineView.pipeline.commitMessage, 18)}</p>
                                                            <p className={classes.content}>{truncatedText(pipelineView.pipeline.commitAuthor, 18)}</p>
                                                            <p className={classes.content}>{pipelineView.pipeline.finishedAt ? displayDateFromNow(pipelineView.pipeline.finishedAt) : ""}</p>
                                                        </CardActionArea>
                                                    </Card>
                                                </Tooltip>
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
