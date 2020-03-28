import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm'
import '../css/UserPage.css'



export class SignUpContainer extends Component {

  state = {
    user_id: null,
    password: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state)
  }

  renderMainUserPage = () => {
    this.props.navProps.history.push('/income-form')
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch("http://localhost:3001/signup", configObject)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.props.signUp(json.username, json.id)
        this.renderMainUserPage()
      })
    e.target.reset()
  }

  render() {
    return (
      <div className="signUpContainer">
        <SignUpForm signUp={this.props.signUp} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default SignUpContainer;
