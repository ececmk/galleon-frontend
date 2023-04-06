import { useState } from "react";
import { FaEdit, FaCheck, FaTrash } from 'react-icons/fa';
import axios from "axios";

const API_URL = "https://ill-bat-beret.cyclic.app/";

function ExpenseCard({
  expenseValue,
  expenseCategory,
  expenseId,
  refresh,
}) {

  const [editDisabled, setEditDisabled] = useState(true);
  const [expense, setExpense] = useState(expenseValue);
  const [category, setCategory] = useState([expenseCategory]);

  const submitExpense = (e) => {
    e.preventDefault();
    setEditDisabled(true);

    const requestBody = { expense };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/expense/${expenseId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const updatedExpense = response.data;
        setCategory(updatedExpense.category);
        setExpense(updatedExpense.expense);
        refresh();
      })
      .catch((error) => console.log(error));
  };

  const deleteExpense = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/expense/${expenseId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        refresh(response.data);
      })
      .catch((err) => console.log(err));
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditDisabled(false);
  };

  const changeExpense = (e) => {
    e.preventDefault();
    setExpense(e.target.value);
  };

  return (
    <div className="w-[300px] m-5 bg-[#FD3C4A] rounded py-2 font-bold flex">
      <form className="px-2 my-2 ">
        <div className="flex items-center justify-around text-white">
          <p className="px-2 w-[140px]" >{expenseCategory}</p>
          <input
            className={`bg-${editDisabled ? "[#FD3C4A]" : "white"} text-${editDisabled ? "white" : "gray-500"}  h-[38px] mx-1 rounded px-2`}
            maxLength="6"
            size="6"
            disabled={editDisabled}
            value={expense}
            onChange={changeExpense}
          />

          {editDisabled ? (
            <button className="text-white content-center" onClick={toggleEdit}>
            <FaEdit className="mx-2" />
            </button>
          ) : null}
          <div className="flex ">
            {editDisabled ? null : (
              <button  onClick={submitExpense}>
                <FaCheck className="mx-2" />
              </button>
            )}
            {editDisabled ? null : (
              <button onClick={deleteExpense}>
                <FaTrash className="mx-2" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseCard;
