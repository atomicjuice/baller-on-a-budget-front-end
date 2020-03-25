import React, { Component } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { withRouter } from 'react-router-dom';


export class ExpenseContainer extends Component {

  state = {
    user_id:null,
    name: null,
    amount: null,
    frequency: null
  }

  onChange = (e) => {
    this.setState({
      user_id:this.props.id,
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  renderExpenseForm = () => {
    this.props.history.push('/expense-form')
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
    .then(data => console.log(data))
    e.target.reset()
    this.renderExpenseForm()
  }


  render() {
    return (
      <div>
        <ExpenseForm onChange={this.onChange} handleSubmit={this.handleSubmit}/>        
      </div>
    );
  }
}

export default withRouter(ExpenseContainer) ;
