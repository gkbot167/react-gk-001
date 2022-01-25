import React from 'react';
import ExpensesFilter from './ExpensesFilter';
import NewExpense from './NewExpense';
import Expenses from './Expenses';
import ExpenseMonthShower from './ExpenseMonthShower';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseDataHandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      //id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <ExpensesFilter />
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
      <ExpenseMonthShower />
    </div>
  );
};

export default App;
