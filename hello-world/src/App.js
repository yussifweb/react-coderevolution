import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>

      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Greet name='Ice' heroName='Media'/>
      <Welcome name='Jet' heroName='Photo'/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
       {/* <Greet name='Awaga' heroName='DJ'>
         <p>This is Children</p>
       </Greet>
       <Greet name='Ice' heroName='Media'/>
       <Greet name='Jet' heroName='Photo'/>
       <Welcome name='Awaga' heroName='DJ'/>
       <Welcome name='Ice' heroName='Media'/>
       <Welcome name='Jet' heroName='Photo'/> */}
       {/* <Hello /> */}
    </div>
  );
}

export default App;
