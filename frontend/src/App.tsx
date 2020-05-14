import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchFromBackend} from './backendAPI';
import {Project, Pipeline, Runner} from './models/models';
function App() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);
  const [runnerList, setRunnerList] = useState<Runner[]>([]);

  useEffect(() => {
    fetchFromBackend(setProjectList, setPipelineList, setRunnerList);
  }, [])

  return (
    <div className="App">
      Projects:
      {projectList.map((project, index) => <div key={index}>{JSON.stringify(project)}</div>)}
      Pipelines:
      {pipelineList.map((pipeline, index) => <div key={index}>{JSON.stringify(pipeline).slice(0, 100)}</div>)}
      Runners:
      {runnerList.map((runner, index) => <div key={index}>{JSON.stringify(runner).slice(0, 1000)}</div>)}
    </div>
  );
}

export default App;
