import React, { Component } from 'react';
import './App.css';
import Homepage from './components/HomePage'
import {Route} from 'react-router-dom'
import UserPage from './components/UserPage';
import SignUp from './Containers/SignUpContainer'




export class App extends Component {



  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => <Homepage/>}/>
      <Route exact path="/signup" render={() => <SignUp/>} />
      <Route exact path="/userpage" render={() => <UserPage/> } />
    </div>
    );
  }
}

export default App;

