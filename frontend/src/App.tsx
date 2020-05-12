import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects/")
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
  }, [])

  return (
    <div className="App">
      {projectList.map(project=><div>{JSON.stringify(project)}</div>)}
    </div>
  );
}

export default App;
