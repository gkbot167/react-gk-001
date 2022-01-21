import React from 'react';
import ExpenseItem from './ExpenseItem';
const Expenses = (props) => {
  return (
    <div>
      <ExpenseItem
        title={props.Expense[0].title}
        amount={props.Expense[0].amount}
        date={props.Expense[0].date}
      />
      <ExpenseItem
        title={props.Expense[1].title}
        amount={props.Expense[1].amount}
        date={props.Expense[1].date}
      />
      <ExpenseItem
        title={props.Expense[2].title}
        amount={props.Expense[2].amount}
        date={props.Expense[2].date}
      />
    </div>
  );
};
export default Expenses;
