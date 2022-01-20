import React from 'react';
import './Expense.css';
import './ExpenseDate';
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
      </div>
      <div className="expense-item__price">
        <div> {props.amount} </div>
      </div>
    </div>
  );
};
export default ExpenseItem;
