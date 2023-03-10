import React, { useState, useEffect } from "react";
import axios from "axios";
import AddExpense from "../Components/AddExpense";
import AddIncome from "../Components/AddIncome";
import DoughnutChart from "../charts/Doughnut";
import Wallet from "../Components/Wallet"
import ExpenseListPage from "./ExpenseList";
import IncomeListPage from "./IncomeList";
const API_URL = "http://localhost:5005";

function Profile(props) {
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);

  const getExpense = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/expense`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setExpense(response.data))
      .catch((error) => console.log(error));
  };

  const getIncome = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/income`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setIncome(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getIncome();
  }, []);

  useEffect(() => {
    getExpense();
  }, []);

  const refreshExpense = () => {
    getExpense();
  };

  const refreshIncome = () => {
    getIncome();
  };

  return (
    <div className="w-screen h-screen">
    <Wallet incomes={income} expenses={expense} />
      <div className="flex justify-around">
        <AddExpense refresh={refreshExpense} />
        <AddIncome refresh={refreshIncome} />
      </div>
      <div className="flex justify-center">
       
          <ExpenseListPage expenses={expense} refresh={refreshExpense} />
          <DoughnutChart expenses={expense} />
          <IncomeListPage incomes={income} refresh={refreshIncome} />
       
       
      </div>

    </div>
  );
}

export default Profile;
