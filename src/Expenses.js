import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState('2020');
  console.log(FilteredYear);
  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter
        Selected={FilteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items
        .filter(
          (expenses) => expenses.date.getFullYear().toString() === FilteredYear
        )
        .map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
    </div>
  );
};
export default Expenses;
