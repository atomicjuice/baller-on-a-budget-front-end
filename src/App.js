import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import { Route, BrowserRouter } from 'react-router-dom'
import SignInContainer from './Containers/SignInContainer';
import SignUpContainer from './Containers/SignUpContainer';
import UserMainPage from './components/UserMainPage';

export class App extends Component {

  state = {
    username: null
  }

  signUp = (username) => {
    this.setState({
      username
    })
  }

  signIn = (username) => {
    this.setState({
      username
    })
  } 


  render() {
    
    return (
      <div className="App">
        {/* {this.state.username ? <h1>Hey,{this.state.username}</h1> : <h1>Hello stranger</h1>} */}
      
      <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />}/>
      <Route exact path="/signup" render={(props) => <SignUpContainer signUp={this.signUp} navProps={props} />} />
      <Route exact path="/signin" render={(props) => <SignInContainer signIn={this.signIn} navProps={props}  />} />
      <Route exact path="/usermainpage" render={(props) => <UserMainPage username={this.state.username} navProps={props}/>}/>
      </BrowserRouter>
      
    </div>
    );
  }
}

export default App;

