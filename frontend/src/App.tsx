import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchFromBackend} from './backendAPI';
import {Project, Pipeline, Runner, Job} from './models/models';
import QueuingPipelineListContainer from './container/QueuingPipelineContainer';
import CompletedPipelineListContainer from './container/CompletedPipelineListContainer';
import RunnerListContainer from './container/RunnerContainer';
import {Container, Grid, Paper} from "@material-ui/core";
import {useRootStyles} from './styles/styles';

function App() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);
  const [JobList, setJobList] = useState<Job[]>([]);
  const [runnerList, setRunnerList] = useState<Runner[]>([]);

  const classes = useRootStyles();
  const fetchRefreshRate = 5000;

  useEffect(() => {
    try {
      fetchFromBackend(setProjectList, setPipelineList, setRunnerList, setJobList);
      setInterval(() => {
        fetchFromBackend(setProjectList, setPipelineList, setRunnerList, setJobList);
      }, fetchRefreshRate);
    } catch (e) {
      console.log(e);
    }
  }, [])

  return (
    <div>
      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.blockTitle}>Queuing Project Pipelines</div>
              <QueuingPipelineListContainer projects={projectList} pipelines={pipelineList} jobs={JobList}></QueuingPipelineListContainer>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.blockTitle}>Completed Project Pipelines</div>
              <CompletedPipelineListContainer projects={projectList} pipelines={pipelineList} jobs={JobList}></CompletedPipelineListContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.blockTitle}>Runners</div>
              <RunnerListContainer runners={runnerList}></RunnerListContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ div >
  );
}

export default App;
