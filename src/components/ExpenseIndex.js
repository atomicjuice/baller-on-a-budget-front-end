import React from 'react';

const ExpenseIndex = ({ expense, edit, destroy}) => {
  return (
    <div className="allExpenses">
      {console.log(expense.id)}
      
      <div><button onClick={destroy} id={expense.id}>delete</button></div>
      
      <div>
        <h4>from {expense.name}</h4>

        <h4>you pay £{expense.amount}</h4>

        <h4>on a {expense.frequency} basis</h4>

        -------------------------------------------------------
    </div>
  <div className="editButton"><button onClick={edit} id={expense.id}>edit</button></div>
    </div>
  );
}

export default ExpenseIndex;
