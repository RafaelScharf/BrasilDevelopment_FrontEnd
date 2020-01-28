import React from 'react';
import './App.css';
import NavigateOfTopics from './components/NavigateOfTopics/index';
import logo from './images/logo-brdev.png';


function App() {
  return (
    <div >
      <header className="App-header">
        <img src={logo} alt=""/><h2>BrasilDevelopment</h2>
      </header>
      <NavigateOfTopics/>

    </div>
  );
}

export default App;
