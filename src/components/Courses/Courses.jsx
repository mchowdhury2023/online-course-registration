import React, { useState, useEffect } from 'react'
import Course from '../Course/Course';

const Courses = ({ onCourseSelect }) => {
    const [courses, setCourses] = useState([]);

    useEffect (() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
      
      }, [])

      return (
        <div className='w-3/4'>
          <div className="grid grid-cols-3 gap-6 ml-10">
            {courses.map(course => (
              <Course 
                key={course.id} 
                course={course} 
                onSelect={() => onCourseSelect(course)}
              />
            ))}
          </div>
        </div>
      )
}

export default Courses