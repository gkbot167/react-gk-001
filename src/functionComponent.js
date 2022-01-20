import React from 'react';
import './expense.css';
const FunctionComponent = () => {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2> Title </h2>
      </div>
      <div className="expense-item__price">
        <div> Amount </div>
      </div>
    </div>
  );
};
export default FunctionComponent;
