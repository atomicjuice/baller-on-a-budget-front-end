import React, { Component } from 'react';
import IncomeFormLoggedIn from '../components/IncomeFormLoggedIn'
import {withRouter} from 'react-router-dom';


export class UserIncomeContainer extends Component {

  state = {
    user_id:this.props.id,
    name: null,
    amount: null,
    frequency: null
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  renderIncomeForm = () => {
    this.props.history.push('income-form-logged-in')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch("http://localhost:3001/income-form", configObject)
    .then(resp => resp.json())
    .then(data => console.log(data))
    e.target.reset()
    this.renderIncomeForm()
  }

  render() {
    return (
      <div>
        <IncomeFormLoggedIn onChange={this.onChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default withRouter(UserIncomeContainer);