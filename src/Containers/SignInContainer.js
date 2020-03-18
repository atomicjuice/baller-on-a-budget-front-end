import React, { Component } from 'react';
import SignInForm from '../components/SignInForm'


export class SignInContainer extends Component {

  state = {
    username: null,
    password: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const configObject = {
      method:  "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify (this.state)      
    }
    fetch("http://localhost:3001/signin", configObject)
    .then(resp => resp.json())
    .then(json => console.log(json) )
    e.target.reset() 
  }

  render() {
    return (
      <div>
        <SignInForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default SignInContainer;
