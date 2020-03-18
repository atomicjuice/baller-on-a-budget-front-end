import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm'


export class SignUp extends Component {

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
        <SignUpForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default SignUp;
