import React from 'react';
import '../css/IncomeExpenseIndex.css'


const IncomeIndex = ({ income, edit, destroy}) => {
  return (
    
    <div className="allIncome">
      
      
      
      <div>
        <h4>from {income.name}</h4>

        <h4>you recieve {income.amount}</h4>

        <h4>on a {income.frequency} basis</h4>

    </div>
    <div className="incomeDeleteButton col-15"><button onClick={destroy} id={income.id}>delete</button></div>
  <div className="incomeEditButton col-15"><button onClick={edit} id={income.id}>edit</button></div>
  -----------------------------
    </div>
  );
}

export default IncomeIndex;
