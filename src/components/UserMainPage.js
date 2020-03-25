import React, { Component } from 'react';
// import App from '../App'
import '../css/UserPage.css'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'


export class UserMainPage extends Component {

  
  // renderWeeklyBudget= () => {
  //   const configObject = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type":"application/json",
  //       "Accept":"application/json"
  //     },
  //     body: JSON.stringify(this.state)
  //   } 
  //   fetch(`http://localhost:3001/user-main-page`, configObject)
  //   .then(resp => resp.json())
  //   .then(data => this.setState(
  //     {weekly_budget:data.weekly_budget,
  //       income:data.weekly_income,
  //       expense:data.weekly_expense
  //     }))
  //     // console.log(this.state)
  // }

  componentDidMount(){
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(this.state)
    } 
    fetch(`http://localhost:3001/user-main-page`, configObject)
    .then(resp => resp.json())
    .then(data => this.setState(
      {weekly_budget:data.weekly_budget,
        income:data.weekly_income,
        expense:data.weekly_expense
      }))
      // console.log(this.state)
  }
  

  state = {
    username: this.props.username,
    user_id: this.props.id,
    weekly_budget: null,
    income: null,
    expense:null
  }

  render() {
    return (
      
      <div className="grid">
        
        {console.log(this.state)}
        <div className="expense">
          expenses breakdown:
          <br/>
          <br/>
          {/* Expense per week £{this.state.expense} */}
          <br/>
          <br/>
          Expense per month £{this.state.expense*4}
        </div>
        <div className="budget">

        {NavBar()}
        

          <Link to="/expense-form-logged-in">
          <button className="expenseButton">add expense</button>
          </Link>
          <Link to="/income-form-logged-in">
            <button className="incomeButton">add income</button>
          </Link>
          
          
          <br/>
        ok alex
        <br/>
        here is your weekly budget.
        <br/>
        <br/>
        £{this.state.weekly_budget}
        </div>
        <div className="income">
          income breakdown:
          
          <br/>
          <br/>
          {/* Income per week is £{this.state.income} */}
          <br/>
          <br/>
          Income per month is £{this.state.income*4}
          <br/>
        </div>
        
        {/* {console.log(this.state.weekly_budget)} */}
      </div>
    );
  }
}

export default UserMainPage;
