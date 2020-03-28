import React, { Component } from 'react';
import IncomeIndex from '../components/IncomeIndex'
import {withRouter} from 'react-router-dom'
import '../css/UserPage.css'


const allIncome= "http://localhost:3001/all-income"


export class IncomeIndexContainer extends Component {

  state ={
    user_id: this.props.id,
    incomeArray: [],
    name: null,
    amount: null,
    frequency: null
  }

  componentDidMount(){
    fetch(allIncome)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        incomeArray: data.all_income
      })
    })
  }


  editIncome = (e) => {
    const id=e.target.id
    this.props.history.push('/income-form/'+ id)
  }

  destroy = (e) => {
    const id=e.target.id
    const configObject = {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }}
      fetch("http://localhost:3001/income-form/"+id, configObject)
      .then(resp => resp.json())
      .then(data => {alert(data.message)

      fetch(allIncome)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          incomeArray: data.all_income
        })
      })})
      
  }

  render() {
    return (
      <div className="incomeIndex">
        {this.state.incomeArray.map(income => <IncomeIndex key={income.id} income={income} edit={this.editIncome} destroy={this.destroy}/>)}
        {console.log(this.state)}
      </div>
    );
  }
}

export default withRouter(IncomeIndexContainer);
