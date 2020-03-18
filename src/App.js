import React, { Component } from 'react';
import './App.css';
import Homepage from './components/HomePage'
import {Route} from 'react-router-dom'
import SignInContainer from './Containers/SignInContainer';
import SignUpContainer from './Containers/SignUpContainer';




export class App extends Component {



  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => <Homepage/>}/>
      <Route exact path="/signup" render={() => <SignUpContainer/>} />
      <Route exact path="/signin" render={() => <SignInContainer/>} />
    </div>
    );
  }
}

export default App;

