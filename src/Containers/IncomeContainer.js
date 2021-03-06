import React, { Component } from 'react';
import IncomeForm from '../components/IncomeForm';
import {withRouter} from 'react-router-dom';


export class IncomeContainer extends Component {

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
    this.props.history.push('/income-form')
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
    // e.target.reset()
    // this.renderIncomeForm()
    this.reset()
  }

  render() {
    return (
      <div>
        <IncomeForm onChange={this.onChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default withRouter(IncomeContainer);
