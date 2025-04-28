import React from 'react';
import employeeImage from '../../assets/employee.png'; // adjust the path and filename

const EmployeeProfile = () => {
  const profile = {
    employeeID: "EMP123",
    name: "Hamza Rana",
    age: 28,
    performanceRating: 4.5,
    salary: 75000,
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-3xl mx-auto bg-blue-100 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Employee Profile</h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={employeeImage} 
            alt="Employee" 
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-gray-700 font-semibold">Employee ID:</h2>
            <p className="text-gray-900">{profile.employeeID}</p>
          </div>
          <div>
            <h2 className="text-gray-700 font-semibold">Name:</h2>
            <p className="text-gray-900">{profile.name}</p>
          </div>
          <div>
            <h2 className="text-gray-700 font-semibold">Age:</h2>
            <p className="text-gray-900">{profile.age}</p>
          </div>
          <div>
            <h2 className="text-gray-700 font-semibold">Performance Rating:</h2>
            <p className="text-gray-900">{profile.performanceRating}</p>
          </div>
          <div>
            <h2 className="text-gray-700 font-semibold">Salary:</h2>
            <p className="text-gray-900">{profile.salary} PKR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
