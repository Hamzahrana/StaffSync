import React from 'react';

const mockSalaryData = [
  {
    employeeID: '101',
    name: 'Alice Johnson',
    department: 'Marketing',
    position: 'Marketing Manager',
    monthlySalary: 5000,
    bonus: 1000,
    totalSalary: 6000,
  },
  {
    employeeID: '102',
    name: 'Bob Smith',
    department: 'Engineering',
    position: 'Software Engineer',
    monthlySalary: 4500,
    bonus: 800,
    totalSalary: 5300,
  },
  {
    employeeID: '103',
    name: 'Charlie Davis',
    department: 'Sales',
    position: 'Sales Executive',
    monthlySalary: 4200,
    bonus: 600,
    totalSalary: 4800,
  },
];

const SalarySummaryPage = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">💰 Salary Summary</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 shadow-lg">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Position</th>
              <th className="px-4 py-2 border">Monthly Salary</th>
              <th className="px-4 py-2 border">Bonus</th>
              <th className="px-4 py-2 border">Total Salary</th>
            </tr>
          </thead>
          <tbody>
            {mockSalaryData.map((entry) => (
              <tr key={entry.employeeID} className="text-center">
                <td className="px-4 py-2 border">{entry.employeeID}</td>
                <td className="px-4 py-2 border">{entry.name}</td>
                <td className="px-4 py-2 border">{entry.department}</td>
                <td className="px-4 py-2 border">{entry.position}</td>
                <td className="px-4 py-2 border">${entry.monthlySalary}</td>
                <td className="px-4 py-2 border">${entry.bonus}</td>
                <td className="px-4 py-2 border">${entry.totalSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalarySummaryPage;
