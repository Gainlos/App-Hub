import React from 'react';
import './App.css';
import HomeView from "./views/HomeView";
import AlgorithmView from "./views/AlgorithmView";
import UploadView from "./views/UploadView";
import MainRouter from "./services/MainRouter";

function App() {
  return (
      <React.Fragment>
      <MainRouter/>
      </React.Fragment>
  );
}

export default App;
