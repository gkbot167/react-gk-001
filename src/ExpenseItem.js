import React from 'react';
import './Expense.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
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
