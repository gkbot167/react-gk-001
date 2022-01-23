import React from 'react';
import './style.css';
import NewExpense from './NewExpense';
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
      <NewExpense />
      <Expenses items={Expense} />
    </div>
  );
}
