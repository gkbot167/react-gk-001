import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './ExpenseForm.css';
const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState('2020');
  console.log(FilteredYear);
  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  const FilteredExpense = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        Selected={FilteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {FilteredExpense.length === 0 && <p>No Expense Found</p>}
      {FilteredExpense.length > 0 &&
        FilteredExpense.map((expenses) => (
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
