import React from 'react';
import {Link} from 'react-router-dom'

const ExpenseFormloggedIn = ({ handleSubmit, onChange }) => {
  return (
    <div>

      <h1>Expense</h1>
      <form onSubmit={handleSubmit} className='incomeForm'>
        <input onChange={onChange} type="text" name="name" placeholder="name of income stream"></input>
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
          <input onChange={onChange} type="integer" name="amount" placeholder="amount"></input>
          <br/>
          <br/>
          <input type="submit" value="save this expense"></input>
          <p>or</p>
          <Link to='/user-main-page'><button type="submit">back to budget breakdown</button></Link>
          
      </form>
    </div>
  );
}

export default ExpenseFormloggedIn;