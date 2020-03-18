import React, { Component } from 'react';
import SignInForm from '../components/SignInForm'

export class SignInContainer extends Component {


  state = {
    username: null,
    password:null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    console.log(this.state)
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
