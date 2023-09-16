import Courses from './components/Courses/Courses'
import Header from './components/Header'
import Registration from './components/Registration/Registration'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20)

  const handleCourseSelect = (course) => {
    if (!selectedCourses.find(item => item.title === course.title)) {
      if (totalCredits + course.credit <= 20) {
        setSelectedCourses([...selectedCourses, course]);
        setTotalCredits(prevCredits => prevCredits + course.credit);
        setTotalPrice(prevPrice => prevPrice + course.price);

        const newRemainingCredit = 20 - (totalCredits + course.credit);
        setRemainingCredit(newRemainingCredit);

        if (newRemainingCredit <= 0) {
          toast.error('Remaining credit is now 0 or below');
        }
  
      } else {
        toast.error('Credit exceeds 20! and also remaining credit is 0 or less');
      }
    } else {
      toast.warn('This course has already been added!');
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
          remainingCredit={remainingCredit}
        />

      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>

  )
}

export default App