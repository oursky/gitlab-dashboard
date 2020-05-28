import React from 'react';
import {ProjectViewModel} from '../models/models';
import {Grid, Box, CardActionArea, Tooltip} from '@material-ui/core';
import {useStyles, boxStyles} from '../styles/styles';
import {truncatedText, displayDateFromNow, redirectToWebsite, getPipelineStyleByStatus} from '../utils/utils';

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
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                        <Box {...boxStyles}>
                                            <CardActionArea className={`${classes.card} ${classes.projectNameCard}`} onClick={() => {redirectToWebsite(projectView.project.webUrl)}}>
                                                {projectView.project.name}
                                            </CardActionArea>
                                        </Box>
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
                                                    <Box {...boxStyles} {...getPipelineStyleByStatus(pipelineView.pipeline)} >
                                                        <CardActionArea className={`${classes.card} ${classes.projectNameCard}`} onClick={() => {redirectToWebsite(pipelineView.pipeline.webUrl)}}>
                                                            <p className={classes.content}># {pipelineView.pipeline.id}</p>
                                                            <p className={classes.content}>{pipelineView.pipeline.commitId.slice(0, 8)} {truncatedText(pipelineView.pipeline.branchRef, 10)}</p>
                                                            <p className={classes.content}>{truncatedText(pipelineView.pipeline.commitMessage, 17)}</p>
                                                            <p className={classes.content}>{truncatedText(pipelineView.pipeline.commitAuthor, 17)}</p>
                                                            <p className={classes.content}>{pipelineView.pipeline.finishedAt ? displayDateFromNow(pipelineView.pipeline.finishedAt) : ""}</p>
                                                        </CardActionArea>
                                                    </Box>
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
