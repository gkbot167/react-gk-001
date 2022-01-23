import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = () => {
  const saveExpenseDataHandler = (enteredexpensesData) => {
    const expensesData = {
      ...enteredexpensesData,
      id: Math.random().toString(),
    };
    console.log(expensesData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenses={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
