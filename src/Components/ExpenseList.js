import ExpenseCard from "./ExpenseCard";

function ExpenseListPage(props) {
  const list = props.expenses;


  return (
    <div>
      {list.map((expense) => {
    
        return (
          <ExpenseCard
            refresh={props.refresh}
            key={expense._id}
            expenseId={expense._id}
            expenseValue={expense.expense}
            expenseCategory={expense.category}
          />
        );
      })}
    </div>
  );
}

export default ExpenseListPage;
