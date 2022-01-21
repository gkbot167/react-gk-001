funtion NewExpense(props)
{
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
export default NewExpense ;