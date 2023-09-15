import Courses from './components/Courses/Courses'
import Header from './components/Header'
import Registration from './components/Registration/Registration'
import React, { useState } from 'react'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourseSelect = (course) => {
    if (!selectedCourses.find(item => item.title === course.title)) {
      if (totalCredits + course.credit <= 20) {
        setSelectedCourses([...selectedCourses, course]);
        setTotalCredits(prevCredits => prevCredits + course.credit);
        setTotalPrice(prevPrice => prevPrice + course.price);
      } else {
        alert('Credit exceeds 20 or remaining credit goes below 0!');
      }
    } else {
      alert('This course has already been added!');
    }
  };

  return (
    <>
  
      <Header></Header>
      <div className='flex mt-10'>
        <Courses onCourseSelect={handleCourseSelect} ></Courses>
        <Registration
          selectedCourses={selectedCourses} 
          totalCredits={totalCredits} 
          totalPrice={totalPrice}
        />

      </div>
   
    </>
  )
}

export default App