import React from 'react';
import '../css/IncomeExpenseIndex.css'

const IncomeIndex = ({ income, edit}) => {
  return (
    <div className="allIncome">
      <div></div>
      <div>
        <h4>from {income.name}</h4>

        <h4>you recieve {income.amount}</h4>

        <h4>on a {income.frequency} basis</h4>

        -------------------------------------------------------
    </div>
  <div><button onClick={edit} id={income.id}></button></div>
    </div>
  );
}

export default IncomeIndex;
