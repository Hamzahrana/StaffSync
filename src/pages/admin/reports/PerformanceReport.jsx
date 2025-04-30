import React from 'react';

const mockAPRData = [
  {
    employeeID: '101',
    name: 'Alice Johnson',
    performanceScore: 4.5,
    performancePeriod: '2024 Q4',
    comments: 'Excellent leadership and timely task completion.',
  },
  {
    employeeID: '102',
    name: 'Bob Smith',
    performanceScore: 3.8,
    performancePeriod: '2024 Q4',
    comments: 'Good performance but needs improvement in communication.',
  },
  {
    employeeID: '103',
    name: 'Charlie Davis',
    performanceScore: 4.2,
    performancePeriod: '2024 Q4',
    comments: 'Consistent and reliable team member.',
  },
];

const APRPage = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        📄 Annual Performance Review (APR)
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 shadow-lg">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Performance Score</th>
              <th className="px-4 py-2 border">Review Period</th>
              <th className="px-4 py-2 border">Comments</th>
            </tr>
          </thead>
          <tbody>
            {mockAPRData.map((entry) => (
              <tr key={entry.employeeID} className="text-center">
                <td className="px-4 py-2 border">{entry.employeeID}</td>
                <td className="px-4 py-2 border">{entry.name}</td>
                <td className="px-4 py-2 border">{entry.performanceScore}</td>
                <td className="px-4 py-2 border">{entry.performancePeriod}</td>
                <td className="px-4 py-2 border">{entry.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default APRPage;
