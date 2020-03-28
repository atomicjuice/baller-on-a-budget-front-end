import React, { Component } from 'react';
import ExpenseFormLoggedIn from '../components/ExpenseFormloggedIn'
import {withRouter} from 'react-router-dom';
import '../css/UserPage.css'



export class UserExpenseContainer extends Component {

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

  renderExpenseForm = () => {
    this.props.history.push('expense-form-logged-in')
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
    fetch("http://localhost:3001/expense-form", configObject)
    .then(resp => resp.json())
    .then(data => alert(`${data.name} saved`))
    e.target.reset()
    this.renderExpenseForm()
  }

  render() {
    return (
      <div className="editExpense">
        <ExpenseFormLoggedIn onChange={this.onChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default withRouter(UserExpenseContainer);