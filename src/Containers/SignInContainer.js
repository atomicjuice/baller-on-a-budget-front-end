import React, { Component } from 'react';
import SignInForm from '../components/SignInForm'
import {withRouter} from 'react-router-dom';


export class SignInContainer extends Component {

  state = {
    user_id: null,
    password: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state);
    
  }

  renderMainUserPage = () => {
    this.props.navProps.history.push('/user-main-page')
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
    fetch("http://localhost:3001/signin", configObject)
      .then(resp => resp.json())
      .then(json =>
        this.props.signIn(json.username, json.id) & console.log(json),
        this.renderMainUserPage())
      }

  render() {
    return (
      <div>
        <SignInForm signIn={this.props.signIn} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        


      </div>
    );
  }
}

export default withRouter(SignInContainer);
