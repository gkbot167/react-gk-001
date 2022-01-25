import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
