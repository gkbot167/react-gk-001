import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          OnSaveExpenseData={saveExpenseDataHandler}
          onStartEditHandle={startEditingHandler}
          onStopEditHandle={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
