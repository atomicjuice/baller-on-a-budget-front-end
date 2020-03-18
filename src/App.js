import React, { Component } from 'react';
import './App.css';
import Homepage from './components/HomePage'
import {Route} from 'react-router-dom'
import SignUpForm from './Containers/SignUpContainer'
import SignInForm from './components/SignInForm';




export class App extends Component {



  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => <Homepage/>}/>
      <Route exact path="/signup" render={() => <SignUpForm/>} />
      <Route exact path="/signin" render={() => <SignInForm/> } />
    </div>
    );
  }
}

export default App;

