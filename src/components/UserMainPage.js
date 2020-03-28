import React, { Component } from 'react';
// import App from '../App'
import '../css/UserPage.css'
import {Link} from 'react-router-dom'


export class UserMainPage extends Component {

  

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
      
      <div className="grid body">
        
        
        {console.log(this.state)}
        <div className="expense">
          <h4>Expenses Breakdown:</h4>
          
          <br/>
          <br/>
          {/* Expense per week £{this.state.expense} */}
          <br/>
          <br/>
          Expense per month £{this.state.expense*4}
        </div>
        <div className="budget">

        <h4>ok alex</h4>
        
        <br/>
        <h4>here is your weekly budget.</h4>
        
        <br/>
        <br/>
        <h4>£{this.state.weekly_budget}</h4>
        
        <br/>


          <Link to="/expense-form-logged-in">
          <button className="expenseButton">add expense</button>
          </Link>
          <Link to="/income-form-logged-in">
            <button className="incomeButton">add income</button>
          </Link>
          
          
          
        
        </div>
        <div className="income">
        <h4>Income Breakdown:</h4>          
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
