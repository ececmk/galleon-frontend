import { useState } from "react";
import axios from "axios";
import IncomeDropdown from "./IncomeDropdown"

const API_URL = "http://localhost:5005";

function AddIncome(props) {
  const [income, setIncome] = useState(0);
  const [category, SetCategory] = useState("");

  const handleCategoryChange = (selectedCategory) => {
    SetCategory(selectedCategory.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { category, income };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/income`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        SetCategory('')
        setIncome(0);
        props.refresh();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-4  flex flex-col m-5 bg-[#00A86B] rounded ">
      <form className="flex  pr-2 pl-2" onSubmit={handleSubmit}>
        <IncomeDropdown className="m-1" onCategoryChange={handleCategoryChange} />
        
        <input className="h-[38px] mx-1 rounded text-gray-500 px-2"
          type="number"
          name="amount"
          value={income}
          placeholder="Amount"
          onChange={(e) => setIncome(e.target.value)}/>
        <button
          className="px-3  text-white justify-center  font-bold text-lg"
          type="submit">
          {" "}
          Add Income
        </button>
      </form>
    </div>
  );
}

export default AddIncome;
