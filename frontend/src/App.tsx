import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchFromBackend} from './backendAPI';
import {Project, Pipeline, Runner} from './models/models';
import QueuingPipelineListContainer from './container/QueuingPipelineContainer';
import CompletedPipelineListContainer from './container/CompletedPipelineListContainer';
import RunnerListContainer from './container/RunnerContainer';
import {Container, Grid, Paper} from "@material-ui/core";
import {useRootStyles} from './styles/styles';

function App() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);
  const [runnerList, setRunnerList] = useState<Runner[]>([]);

  const classes = useRootStyles();

  useEffect(() => {
    fetchFromBackend(setProjectList, setPipelineList, setRunnerList);
  }, [])

  return (
    <div>
      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <h3>Queuing Project Pipelines</h3>
              <QueuingPipelineListContainer projects={projectList} pipelines={pipelineList}></QueuingPipelineListContainer>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <h3>Completed Project Pipelines</h3>
              <CompletedPipelineListContainer projects={projectList} pipelines={pipelineList}></CompletedPipelineListContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <h3>Runners</h3>
              <RunnerListContainer runners={runnerList}></RunnerListContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ div >
  );
}

export default App;
