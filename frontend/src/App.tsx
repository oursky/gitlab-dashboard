import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchFromBackend} from './backendAPI';
import {Project, Pipeline, Runner} from './models/models';
import QueuingPipelineListContainer from './container/QueuingPipelineContainer';
import CompletedPipelineListContainer from './container/CompletedPipelineListContainer';
import RunnerListContainer from './container/RunnerContainer';
function App() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);
  const [runnerList, setRunnerList] = useState<Runner[]>([]);

  useEffect(() => {
    fetchFromBackend(setProjectList, setPipelineList, setRunnerList);
  }, [])

  return (
    <div className="App">
      <p>Queuing Projects and Pipeline</p>
      <QueuingPipelineListContainer projects={projectList} pipelines={pipelineList}></QueuingPipelineListContainer>
      <p>Completed Projects and Pipeline</p>
      <CompletedPipelineListContainer projects={projectList} pipelines={pipelineList}></CompletedPipelineListContainer>
      <p>Runners</p>
      <RunnerListContainer runners={runnerList}></RunnerListContainer>
    </div>
  );
}

export default App;
