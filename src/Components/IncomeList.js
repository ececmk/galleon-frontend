import IncomeCard from "./IncomeCard";

function IncomeListPage(props) {
  const list = props.incomes;

  return (
    <div>
      
      {list.map((income) => {
        return (
          <IncomeCard
            refresh={props.refresh}
            key={income._id}
            incomeId={income._id}
            incomeTitle={income.title}
            incomeValue={income.income}
            incomeCategory={income.category}
          />
        );
      })}
    </div>
  );
}

export default IncomeListPage;
