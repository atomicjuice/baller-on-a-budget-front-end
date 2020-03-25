import React, { Component } from 'react';
import ExpenseIndex from '../components/ExpenseIndex'
import {withRouter} from 'react-router-dom'

const allExpenses= "http://localhost:3001/all-expenses"


export class ExpenseIndexContainer extends Component {

  state ={
    user_id: this.props.id,
    expenseArray: [],
    name: null,
    amount: null,
    frequency: null
  }

  componentDidMount(){
    fetch(allExpenses)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        expenseArray: data.all_expenses
      })
    })
  }

  editExpense = (e) => {
    const id=e.target.id
    this.props.history.push('/expense-form/'+ id)
  }

  destroy = (e) => {
    const id=e.target.id
    const configObject = {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }}
      fetch("http://localhost:3001/expense-form/"+id, configObject)
      .then(resp => resp.json())
      .then(data => {alert(data.message)

      fetch(allExpenses)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          expenseArray: data.all_expenses
        })
      })})
      
  }

  render() {
    return (
      <div>
        {this.state.expenseArray.map(expense => <ExpenseIndex key={expense.id} expense={expense} edit={this.editExpense} destroy={this.destroy}/>)}
        {console.log(this.state)}
      </div>
    );
  }
}

export default withRouter(ExpenseIndexContainer);
