import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchFromBackend} from './backendAPI';
import {Project, Pipeline, Runner} from './models/models';
import QueuingPipelineListContainer from './container/QueuingPipelineContainer';
import CompletedPipelineListContainer from './container/CompletedPipelineListContainer';
import RunnerListContainer from './container/RunnerContainer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
    paper: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(3),
    },
  }),
);

function App() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);
  const [runnerList, setRunnerList] = useState<Runner[]>([]);

  const classes = useStyles();

  useEffect(() => {
    fetchFromBackend(setProjectList, setPipelineList, setRunnerList);
  }, [])

  return (
    <div>
      <Container className={classes.root} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h2>Queuing Projects and Pipeline</h2>
              <QueuingPipelineListContainer projects={projectList} pipelines={pipelineList}></QueuingPipelineListContainer>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h2>Completed Projects and Pipeline</h2>
              <CompletedPipelineListContainer projects={projectList} pipelines={pipelineList}></CompletedPipelineListContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Runners</h2>
              <RunnerListContainer runners={runnerList}></RunnerListContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default App;
