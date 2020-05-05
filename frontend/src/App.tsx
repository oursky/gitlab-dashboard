import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/projects/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setProjectId(result[0].projectId);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])
  return (
    <div className="App">
      {projectId}
    </div>
  );
}

export default App;
