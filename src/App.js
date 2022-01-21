import React from 'react';
import './style.css';
import ExpenseItem from './ExpenseItem';
import Expenses from './Expenses';
export default function App() {
  const Expense = [
    {
      title: 'Car Insurance',
      amount: '1000',
      date: new Date(),
    },
    {
      title: 'Car Insurance',
      amount: '2000',
      date: new Date(),
    },
    {
      title: 'Car Insurance',
      amount: '3000',
      date: new Date(),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={Expense[0].title}
        amount={Expense[0].amount}
        date={Expense[0].date}
      />
      <ExpenseItem
        title={Expense[1].title}
        amount={Expense[1].amount}
        date={Expense[1].date}
      />
      <ExpenseItem
        title={Expense[2].title}
        amount={Expense[2].amount}
        date={Expense[2].date}
      />
    </div>
  );
}
