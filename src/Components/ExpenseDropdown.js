import React from "react";
import Select from "react-select";


    const expenseCategories = [
        { value: 'rent', label: 'Rent' },
        { value: 'groceries', label: 'Groceries' },
        { value: 'bills', label: 'Bills' },
        { value: 'shopping', label: 'Shopping' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'other', label: 'Other' }
      ]

    const ExpenseDropdown = () => {
        return(
        <div>
        <p>Select a category</p>
        <Select options={expenseCategories} />
        </div>
        )
    }

export default ExpenseDropdown