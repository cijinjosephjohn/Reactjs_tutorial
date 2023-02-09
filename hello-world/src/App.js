import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from  './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';

class App extends Component{
  render(){
    return (
      <div className="App">
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <Greet name="Tony" heroname="Ironman"></Greet>
        <ParentComponent></ParentComponent>
        {/* <Greet name="Brue" heroname="Batman">
          <p>This is a children tag</p></Greet>
          <Greet name="Tony" heroname="Ironman">
          <p>This is a children tag</p></Greet>
          <Greet name="Clark" heroname="Superman">
          <p>This is a children tag</p></Greet>
          <Welcome name ="Bruce" heroname ="Batman"></Welcome>
          <Welcome name ="Tony" heroname="Ironman"></Welcome>
          <Welcome name = "Clark" heroname="Superman"></Welcome>
          <Message></Message> */}
          <Welcome name = "Clark" heroname="Superman"></Welcome>
          <Counter></Counter>
      </div>
    )
  }
}

export default App;
