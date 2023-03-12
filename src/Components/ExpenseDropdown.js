import React, { useState } from "react";
import Select from "react-select";

const expenseCategories = [
  { value: "Rent", label: "Rent" },
  { value: "Groceries", label: "Groceries" },
  { value: "Bills", label: "Bills" },
  { value: "Shopping", label: "Shopping" },
  { value: "Transportation", label: "Transportation" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Other", label: "Other" }
];

const ExpenseDropdown = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    props.onCategoryChange(selectedOption);
  };

  return (
    <div>
      <Select
        className="w-[12.5rem]"
        placeholder="Select a category"
        value={selectedCategory}
        options={expenseCategories}
        onChange={handleCategoryChange}
      />
    </div>
  );
};

export default ExpenseDropdown;
