import ProgressBar from "./ProgressBar";

function Wallet({ incomes, expenses }) {
  let expenseTotal = 0;
  let incomeTotal = 0;

  incomes.forEach((_income) => {
    incomeTotal += _income.income;
  });

  expenses.forEach((_expense) => {
    expenseTotal += _expense.expense;
  });

  function getPercentage(incomeTotal, expenseTotal) {
    let percentage = ((expenseTotal * 100) / incomeTotal).toFixed(2);
    console.log(percentage);
    return percentage;
  }
const percentage = `${getPercentage(incomeTotal, expenseTotal)}%`
console.log(percentage, incomeTotal, expenseTotal)
  return (
    <div className="flex justify-center items-center my-10">
      <ProgressBar progressPercentage={percentage} />
      <h1 className="text-[#7F3DFF] font-bold text-xl mx-2">
        {incomeTotal - expenseTotal} / {incomeTotal}
      </h1>
    </div>
  );
}

export default Wallet;
