import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import '../css/UserPage.css'



const incomeToEdit = "http://localhost:3001"
 

export class EditIncomeForm extends Component {

  state={
  }

  incomePath = incomeToEdit + this.props.location.pathname


  componentDidMount(){
    fetch(incomeToEdit+this.props.location.pathname)
    .then(resp => resp.json())
    .then(data => { 
      this.setState({
        name:data.name,
        amount:data.amount,
        frequency:data.frequency,
        user_id:data.user_id
      })
      console.log(this.state)
    })
  }

  refreshAfterEdit = () => {
    fetch(incomeToEdit+this.props.location.pathname)
    .then(resp => resp.json())
    .then(data => { 
      this.setState({
        name:data.name,
        amount:data.amount,
        frequency:data.frequency,
        user_id:data.user_id
      })
      console.log(this.state)
    })
  }


  render() {
   const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
      console.log(this.state)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      e.target.reset()
      const configObject = {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify(this.state)
      }
      fetch(this.incomePath, configObject)
      .then(resp => resp.json())
      .then(data => alert(`${data.name} updated`))

    }

    return (
      <div >
        {console.log(this.props.location.pathname)}
      <h1>Edit Income</h1>
      <form onSubmit={handleSubmit} className='incomeForm'>
        <input onChange={onChange} type="text" name="name" placeholder="name of income stream" value={this.state.name}></input>
        <br />
        <br/>
        <label>
          <input onChange={onChange} type="radio" name="frequency" value="weekly"></input>
          weekly
          </label>
        <label>
          <input onChange={onChange} type="radio" name="frequency" value="monthly"></input>
          monthly
          </label>
          <br/>
          <br/>
          <label>£</label>
          <input onChange={onChange} type="integer" name="amount" placeholder="amount" value={this.state.amount}></input>
          <br/>
          <br/>
          <input type="submit" value="save"></input>
          <p>or</p>
          <Link to='/user-main-page'><button type="submit">back to budget breakdown</button></Link>
          
      </form>
    </div>
    );
  }
}

export default withRouter(EditIncomeForm);
