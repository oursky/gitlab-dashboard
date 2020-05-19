import React from 'react';
import {ProjectViewModel} from '../models/models';
import {Grid, Box, Card} from '@material-ui/core';
import {useStyles} from '../styles/styles';

interface Props {
    projectsView: ProjectViewModel[];
}

function QueuingPipelineList(props: Props) {
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
                                        <Card className={classes.card}>{project.name}</Card>
                                    </Grid>
                                    {project.pipelines.map((pipeline, index) => {
                                        return (
                                            <Grid item key={index} xs={2}>
                                                <Card className={classes.card}>
                                                    <p className={classes.content}>{pipeline.id}</p>
                                                    <p className={classes.content}>{pipeline.commitId.slice(0, 8)} {pipeline.branchRef}</p>
                                                    <p className={classes.content}>{pipeline.commitMessage}</p>
                                                    <p className={classes.content}>{pipeline.commitAuthor}</p>
                                                    <p className={classes.content}>{pipeline.finishedAt ? JSON.stringify(pipeline.finishedAt).slice(6, 20) : ""}</p>
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

export default QueuingPipelineList;
