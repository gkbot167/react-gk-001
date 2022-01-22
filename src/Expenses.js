import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
const Expenses = (props) => {
  return (
    <div className="expenses">
      <div className="">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <br></br>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <br></br>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </div>
    </div>
  );
};
export default Expenses;
