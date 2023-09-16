import React from 'react';
import {GoBook} from 'react-icons/go';



const Course = ({course, onSelect}) => {

  const {image, title, description, price, credit} = course;


return (
  <div className='border-2 rounded-lg p-4 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-200'>
    
    <img src={image} alt={title} className='w-full h-48 object-cover rounded-t-lg mb-4'/>
    <h3 className='text-lg font-semibold mb-2'>{title}</h3>
    <p className='text-gray-600 mb-4 flex-grow'>{description}</p>
    <div className='flex justify-between mb-4'>
      <div>Price: ${price}</div>
     
      <GoBook></GoBook>
      
      <div>Credit : {credit}hr</div>
    
      
    </div>
    <button 
      className='bg-blue-500 text-white rounded-md py-2 px-4 mt-auto' 
      onClick={onSelect}
    >
      Select
    </button>
  </div>
)
}
export default Course