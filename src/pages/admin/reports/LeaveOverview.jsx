import React from 'react';

const mockLeaveData = [
  { employeeID: '101', name: 'Alice Johnson', sickLeave: 3, vacationLeave: 2, otherLeave: 1 },
  { employeeID: '102', name: 'Bob Smith', sickLeave: 4, vacationLeave: 1, otherLeave: 2 },
  { employeeID: '103', name: 'Charlie Davis', sickLeave: 2, vacationLeave: 3, otherLeave: 1 },
];

const LeaveSummaryPage = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">🌴 Leave Summary Report</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 shadow-lg">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Sick Leave</th>
              <th className="px-4 py-2 border">Vacation Leave</th>
              <th className="px-4 py-2 border">Other Leave</th>
            </tr>
          </thead>
          <tbody>
            {mockLeaveData.map((entry) => (
              <tr key={entry.employeeID} className="text-center">
                <td className="px-4 py-2 border">{entry.employeeID}</td>
                <td className="px-4 py-2 border">{entry.name}</td>
                <td className="px-4 py-2 border">{entry.sickLeave}</td>
                <td className="px-4 py-2 border">{entry.vacationLeave}</td>
                <td className="px-4 py-2 border">{entry.otherLeave}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveSummaryPage;
