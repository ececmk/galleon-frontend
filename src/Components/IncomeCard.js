import { useState } from "react";
import { FaEdit, FaCheck, FaTrash } from 'react-icons/fa';
import axios from "axios";

const API_URL = "https://ill-bat-beret.cyclic.app/";

function IncomeCard({
  incomeValue,
  incomeCategory,
  incomeId,
  refresh,
}) {
  const [editDisabled, setEditDisabled] = useState(true);


  const [income, setIncome] = useState(incomeValue);
  const [category, setCategory] = useState([incomeCategory]);

  const submitIncome = (e) => {
    e.preventDefault();
    setEditDisabled(true);

    const requestBody = {income };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/income/${incomeId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const updatedIncome = response.data;
        setCategory(updatedIncome.category);
        setIncome(updatedIncome.income);
        refresh();
      })
      .catch((error) => console.log(error));
  };

  const deleteIncome = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/income/${incomeId}`, {
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

  const changeIncome = (e) => {
    e.preventDefault();
    setIncome(e.target.value);
  };

  return (

    <div className="w-[300px] m-5 bg-[#00A86B] rounded py-2 font-bold flex">
      <form className="px-2 my-2 ">
        <div className="flex items-center justify-around text-white">
          <p className="px-2 w-[140px]">{incomeCategory}</p>
          <input
            className={`bg-${editDisabled ? "[#00A86B]" : "white"} text-${editDisabled ? "white" : "gray-500"}  h-[38px] mx-1 rounded px-2`}
            maxLength="6"
            size="6"
            disabled={editDisabled}
            value={income}
            onChange={changeIncome}
          />

          {editDisabled ? (
            <button className="text-white content-center w-[200px]" onClick={toggleEdit}>
            <FaEdit className="mx-2 w-5 h-5" />
            </button>
          ) : null}
          <div className="flex items-center justify-center ">
            {editDisabled ? null : (
              <button  onClick={submitIncome}>
                <FaCheck className="mx-2" />
              </button>
            )}
            {editDisabled ? null : (
              <button onClick={deleteIncome}>
                <FaTrash className="mx-2" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default IncomeCard;
