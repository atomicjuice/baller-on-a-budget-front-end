import React from 'react';
import {Link} from 'react-router-dom'

const IncomeForm = ({ handleSubmit, onChange }) => {
  return (
    <div>

      <h1>Income</h1>
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
          <input type="submit" value="save"></input>
          <p>or</p>
          <Link to='/expense-form'><button type="submit">move on to expenses</button></Link>
          
      </form>
    </div>
  );
}

export default IncomeForm;
