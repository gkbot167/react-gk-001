import React from 'react';
import './expense.css';
const FunctionComponent = () => {
  const ExpenseTitle = 'Car insurance';
  return (
    <div className="expense-item">
      <h2>Date</h2>
      <div className="expense-item__description">
        <h2> {ExpenseTitle}</h2>
      </div>
      <div className="expense-item__price">
        <div> Amount </div>
      </div>
    </div>
  );
};
export default FunctionComponent;
