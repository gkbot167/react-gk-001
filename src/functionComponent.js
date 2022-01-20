import React from 'react';
import './expense.css';
const FunctionComponent = (props) => {
  const ExpenseDate = new Date();
  const ExpenseTitle = 'Car insurance';
  const ExpenseAmount = '1000';
  return (
    <div className="expense-item">
      <h2>{props.date.toISOString()}</h2>
      <div className="expense-item__description">
        <h2> {props.title}</h2>
      </div>
      <div className="expense-item__price">
        <div> {props.amount} </div>
      </div>
    </div>
  );
};
export default FunctionComponent;
