import React, { useState } from 'react';
import people from '../review-data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const { name, image, text } = people[index]

  const checkNumber = (number) => {
    if(number > people.length -1 ){
      return 0;
    }else if(number < 0) {
      return people.length -1 
    }else {
      return number
    }
    
  }

  const nextPerson = () =>{
    setIndex((index) =>{
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () =>{
    setIndex((index) =>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  return <article className="w-2/4 rounded-xl bg-white py-6 px-8 ease-linear duration-300 text-center mb-20">
    <div className="relative w-36 h-36 rounded-full m-auto mb-6 border-8 border-[#FCAC12]">
      <img src={image} alt={name} className="w-full h-full block object-cover rounded-full relative" />
    </div>
    <div className="">
    <h4 className="mb-1 m-auto text-2xl">{name}</h4>
    <p className="font-normal text-[#7F3DFF]">{text}</p>
    </div>
    <div className='button-container'>
      <button className="text-xl border-transparent mx-0 my-2" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="text-xl border-transparent"  onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
  </article>
};

export default Review;