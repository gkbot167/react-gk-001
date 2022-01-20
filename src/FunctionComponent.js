import React from 'react';
import './Expense.css';
const FunctionComponent = (props) => {
  const month = props.date.toLocaleString('en-UK', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-UK', { day: '2-digit' });
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
export default FunctionComponent;
