import React from 'react';

const mockEmployeeData = [
  {
    employeeID: '101',
    name: 'Alice Johnson',
    department: 'Marketing',
    position: 'Marketing Manager',
    performanceScore: 4.5,
    hireDate: '2020-03-15',
  },
  {
    employeeID: '102',
    name: 'Bob Smith',
    department: 'Engineering',
    position: 'Software Engineer',
    performanceScore: 3.8,
    hireDate: '2019-08-22',
  },
  {
    employeeID: '103',
    name: 'Charlie Davis',
    department: 'Sales',
    position: 'Sales Executive',
    performanceScore: 4.2,
    hireDate: '2021-02-10',
  },
];

const EmployeeSummaryPage = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">👥 Employee Summary</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 shadow-lg">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Position</th>
              <th className="px-4 py-2 border">Performance Score</th>
              <th className="px-4 py-2 border">Hire Date</th>
            </tr>
          </thead>
          <tbody>
            {mockEmployeeData.map((entry) => (
              <tr key={entry.employeeID} className="text-center">
                <td className="px-4 py-2 border">{entry.employeeID}</td>
                <td className="px-4 py-2 border">{entry.name}</td>
                <td className="px-4 py-2 border">{entry.department}</td>
                <td className="px-4 py-2 border">{entry.position}</td>
                <td className="px-4 py-2 border">{entry.performanceScore}</td>
                <td className="px-4 py-2 border">{entry.hireDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeSummaryPage;
