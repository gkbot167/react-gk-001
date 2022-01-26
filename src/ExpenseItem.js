import React, { useState } from 'react';
import './Expense.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //console.log(title);

  const clickHandler = () => {
    setTitle('Updated');
    //console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <button onClick={clickHandler}> Click Here </button>
        <div className="expense-item__price">{props.amount} </div>
      </div>
    </div>
  );
};
export default ExpenseItem;
