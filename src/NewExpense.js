import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
