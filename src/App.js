import React from 'react';
import logo from './logo.svg';
import './App.css';
//import FuntionClick from './components/FunctionClick';
//import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding"
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div>
    <h1>hello</h1>
      <ParentComponent/>
    </div>
  );
}

export default App;
