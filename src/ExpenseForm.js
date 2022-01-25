import React, { useState } from 'react';
import NewExpense from './NewExpense';
import './Expense.css';
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  //const [userInput, setUserInput] = useState({
  // enteredTitle: '',
  //enteredAmount: '',
  //enteredDate: '',
  //});
  const TitleClickHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event);
    //setUserInput({ ...userInput, enteredTitle: event.target.value });
    //setUserInput((prevState) => {
    //return { prevState, enteredTitle: event.target.value };
    //});
  };
  const AmountClickHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const DateClickHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  const saveExpenseDataHandler_1 = (expensesData) => {
    const expensesData_1 = {
      ...expensesData,
      id: Math.random().toString(),
    };
    console.log(expensesData_1);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    console.log(expensesData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.saveExpenseDataHandler(expensesData);
    this.props.saveExpenseDataHandler_1(expensesData);
  };
  return (
    <form onSubmit={submitHandler} onSubmit={saveExpenseDataHandler_1}>
      <div className="new-expense__controls">
        <div className="new-expense__controls ">
          <label>Title</label>
          <div>
            <input
              type="text"
              value={enteredTitle}
              onChange={TitleClickHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <div>
            <input
              type="number"
              value={enteredAmount}
              onChange={AmountClickHandler}
              min="1"
              step="1"
            ></input>
          </div>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <div>
            <input
              type="date"
              value={enteredDate}
              onChange={DateClickHandler}
              min="2021-01-01"
              max="2022-12-31"
            ></input>
          </div>
        </div>
        <br></br>
        <div className="new-expense__action"></div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
