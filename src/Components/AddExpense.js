import { useState } from "react";
import axios from "axios";
import ExpenseDropdown from "./ExpenseDropdown";

const API_URL = "http://localhost:5005";

function AddExpense(props) {
  const [expense, setExpense] = useState(0);
  const [category, SetCategory] = useState('');

  const handleCategoryChange = (selectedCategory) => {
    SetCategory(selectedCategory.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { category, expense };
    console.log(requestBody)
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/expense`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        SetCategory('')
        setExpense(0);
        props.refresh();
      })
      .catch((error) => console.log(error));
     
  };

  return (
    <div className="py-4  flex flex-col m-5 bg-[#FD3C4A] rounded ">

      <form className="flex  pr-2 pl-2" onSubmit={handleSubmit}>

      <ExpenseDropdown className="m-1" onCategoryChange={handleCategoryChange} />

        <input className="h-[38px] mx-1 rounded text-gray-500 px-2"
          type="number"
          name="amount"
          value={expense} 
          placeholder= 'Amount'
          onChange={(e) => setExpense(e.target.value)}/>
        <button
          className="px-3  text-white justify-center  font-bold text-lg"
          type="submit">
          {" "}
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
