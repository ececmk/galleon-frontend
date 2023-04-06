import React, { useState } from "react";
import Select from "react-select";


const incomeCategories = [
    { value: 'Salary', label: 'Salary' },
    { value: 'Passive Income', label: 'Passive Income' },
    { value: 'Inheritance', label: 'Inheritance' },
    { value: 'Other', label: 'Other' }
]

const IncomeDropdown = (props) => {
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
                options={incomeCategories}
                onChange={handleCategoryChange}
            />
        </div>
    )
}

export default IncomeDropdown;