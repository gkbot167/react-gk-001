import React, { useState } from 'react';
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
    //setUserInput({ ...userInput, enteredTitle: event.target.value });
    //setUserInput((prevState) => {
    //return { prevState, enteredTitle: event.target.value };
    //});
  };
  const AmountClickHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const DateClickHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      tittle: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expensesData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Title</label>
        </div>
        <div className="new-expense__control input">
          <input type="text" onChange={TitleClickHandler}></input>
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
        </div>
        <div className="new-expense__control input">
          <input
            type="number"
            onChange={AmountClickHandler}
            min="1"
            step="1"
          ></input>
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
        </div>
        <div className="new-expense__control input">
          <input
            type="date"
            onChange={DateClickHandler}
            min="2021-01-01"
            max="2022-12-31"
          ></input>
        </div>
        <br></br>
        <div className="new-expense__action"></div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
