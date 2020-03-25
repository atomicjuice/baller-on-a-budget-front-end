import React, { Component } from 'react';
import IncomeIndex from '../components/IncomeIndex'
import {withRouter} from 'react-router-dom'

const allIncome= "http://localhost:3001/all-income"
const patchIncome = "http://localhost:3001/income-form/:id"


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

  render() {
    return (
      <div>
        {this.state.incomeArray.map(income => <IncomeIndex key={income.id} income={income} edit={this.editIncome}/>)}
        {/* <IncomeIndex income={this.state.incomeArray}/> */}
        {console.log(this.state.incomeArray)}
      </div>
    );
  }
}

export default withRouter(IncomeIndexContainer);
