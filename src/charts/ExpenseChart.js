import { PieChart, Pie, Cell } from "recharts";
import React, { useState, useEffect } from "react";
const defaultData = [];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderLabel = (entry) => {
  return `${entry.name} (${entry.value})`
}

function ExpenseChart(props) {
  const { expenses } = props;
  const [doughnutData, setDoughnutData] = useState(defaultData);

  const expensesToDoughnutData = (expenses) => {
    const categories = [...new Set(expenses.map((e) => e.category))];
    const data = [];
    for (const category of categories) {
      const allExpensesForCategory = expenses
        .filter((e) => e.category === category)
        .map((e) => e.expense);
      const sumExpensesForCategory = allExpensesForCategory.reduce(
        (a, b) => a + b,
        0
      );
      data.push({ name: category, value: sumExpensesForCategory });
    }
    return data;
  };

  useEffect(() => {
    const data = expensesToDoughnutData(expenses);
    console.log(data);
    setDoughnutData(data);
  }, [expenses]);

  return (
    <div className="flex justify-center">
      <div>
        <PieChart width={600} height={400}>
          <Pie
            label={renderLabel}
            data={doughnutData}
            cx={300}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
          >
            {doughnutData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default ExpenseChart;
