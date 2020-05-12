import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [projectList, setProjectList] = useState([]);
  const [pipelineList, setPipelineList] = useState([]);
  const [runnerList, setRunnerList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/backend/projects/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setProjectList(result);
        },
        (error) => {
          console.log(error);
        }
      )
    fetch("http://localhost:8000/backend/pipelines/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setPipelineList(result);
        },
        (error) => {
          console.log(error);
        }
      )
    fetch("http://localhost:8000/backend/runners/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setRunnerList(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  return (
    <div className="App">
      Projects:
      {projectList.map((project,index)=><div key={index}>{JSON.stringify(project)}</div>)}
      Pipelines:
      {pipelineList.map((pipeline,index)=><div key={index}>{JSON.stringify(pipeline).slice(0, 100)}</div>)}
      Runners:
      {runnerList.map((runner,index)=><div key={index}>{JSON.stringify(runner).slice(0, 100)}</div>)}
    </div>
  );
}

export default App;
