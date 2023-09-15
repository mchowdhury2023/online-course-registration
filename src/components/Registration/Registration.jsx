const Registration = ({ selectedCourses, totalCredits, totalPrice }) => {
  return (
    <div className='w-1/4 ml-10'>
      <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
      <p className="text-lg mb-2"><strong>Remaining total hours: {20 - totalCredits}</strong></p>
        <h1 className="text-xl font-bold mb-4">Selected Course Name:</h1>
        <ul className="mb-4 space-y-2">
          {selectedCourses.map(course => (
            <li key={course.id} className="p-2 bg-gray-100 rounded border border-gray-200">{course.title}</li>
          ))}
        </ul>
        <p className="text-lg mb-2"><strong>Total Credit Hour:</strong> {totalCredits}</p>
        <p className="text-lg mb-2"><strong>Total Price:</strong> {totalPrice} USD</p>
      </div>
    </div>
  )
}

export default Registration;
  
  