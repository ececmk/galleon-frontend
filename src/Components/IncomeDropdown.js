import React from "react";
import Select from "react-select";


    const incomeCategories = [
        { value: 'salary', label: 'Salary' },
        { value: 'passive Income', label: 'Passive Income' },
        { value: 'inheritance', label: 'Inheritance' },
        { value: 'other', label: 'Other' }
      ]

    const IncomeDropdown = () => {
        return(
        <div>
      
        <Select className="w-[12.5rem]"
        placeholder='Select a category' 
        options={incomeCategories} />
        </div>
        )
    }

export default IncomeDropdown;