import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';
import axios from "axios";
import ExpenseDropdown from "./ExpenseDropdown";

const API_URL = "http://localhost:5005";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [expense, setExpense] = useState(0);
  const [category, SetCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, category, expense };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/expense`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setExpense(0);
        props.refresh();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-52 border-2 border-red-400  flex flex-col m-5">

      <form className="flex  pr-2 pl-2" onSubmit={handleSubmit}>

        <ExpenseDropdown onChange={(e) => SetCategory(e.target.value)}/>
        
     

        <label className="text-lg">Amount:</label>
        <input
          type="number"
          name="amount"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button
          className="btn-red px-3 mb-2 mt-2 text-white  justify-center  bg-[#FD3C4A] py-3 font-bold text-lg"
          type="submit"
        >
          {" "}
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
