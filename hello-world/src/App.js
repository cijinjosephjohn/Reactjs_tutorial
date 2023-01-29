import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/Counter';
class App extends Component{
  render(){
    return (
      <div className="App">
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
          <Counter></Counter>
      </div>
    )
  }
}

export default App;
