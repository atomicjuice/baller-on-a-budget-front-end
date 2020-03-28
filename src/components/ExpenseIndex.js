import React from 'react';
// import '../css/UserPage.css'
import '../css/IncomeExpenseIndex.css'

const ExpenseIndex = ({ expense, edit, destroy}) => {
  return (
    <div className="allExpenses">
      {console.log(expense.id)}
      
      
      <div className="expenseCardInfo">
        <h4>from {expense.name}</h4>

        <h4>you pay £{expense.amount}</h4>

        <h4>on a {expense.frequency} basis</h4>

        
    </div>
    <div className="expenseDeleteButton col-15"><button onClick={destroy} id={expense.id}>delete</button></div>

  <div className="expenseEditButton col-15"><button onClick={edit} id={expense.id}>edit</button></div>
  -----------------------------
    </div>
  );
}

export default ExpenseIndex;
