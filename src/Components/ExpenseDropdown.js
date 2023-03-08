import { set } from 'mongoose';
import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function ExpenseDropdown() {

    const [open, setOpen] = useState(false)
    const [category, SetCategory] = useState("");
    const categoryRef = useRef()
    const buttonRef = useRef()

    window.addEventListener('click', (e) =>{
        if(e.target !== categoryRef.current && e.target !== buttonRef.current) {
            setOpen(false)
        }
    } )

    const expenseCategories = [
        "Rent",
        "Food",
        "Bills",
        "Shopping",
        "Transportation",
        "Entertainment",
        "Other"
    ]

    return (
        <div className='relative'>
            <button  className='w-36 flex'
            ref={buttonRef}
            onClick={() => setOpen(!open)}>Select a category <FaChevronDown /></button>
            {open && (
                <div ref={categoryRef} 
                className='absolute'>
                    <ul>
                        {expenseCategories.map((category) => (
                            <li
                            onClick={() => setOpen(false)}
                            key={category}>{category}
                            </li>
                        ))
                        }
                    </ul>

                </div>
            )

            }

        </div>
    )
}

export default ExpenseDropdown