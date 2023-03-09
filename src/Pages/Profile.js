import React, { useState, useEffect } from "react";
import axios from "axios";
import DoughnutChart from "../charts/Doughnut";
import Wallet from "../Components/Wallet";
import ExpenseListPage from "./ExpenseList";
import IncomeListPage from "./IncomeList";
const API_URL = "http://localhost:5005";

function Profile() {
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

  return (
    <div className="w-screen h-screen">
        <div className="flex  justify-center">
            <ExpenseListPage expenses={expense} refresh={getExpense} />
            <IncomeListPage incomes={income} refresh={getIncome} />
      </div>
    </div>
  );
}

export default Profile;
