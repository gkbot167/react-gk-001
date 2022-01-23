import React from 'react';
import './Expense.css';
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="1" step="1"></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2022-12-31"></input>
        </div>
        <br></br>
        <div className="new-expense__action"></div>
        <button>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
