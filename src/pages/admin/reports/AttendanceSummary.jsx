import React from 'react';

const mockAttendanceData = [
  { employeeID: '101', name: 'Alice Johnson', daysPresent: 22, daysAbsent: 3, month: 'January' },
  { employeeID: '102', name: 'Bob Smith', daysPresent: 20, daysAbsent: 5, month: 'January' },
  { employeeID: '103', name: 'Charlie Davis', daysPresent: 23, daysAbsent: 2, month: 'January' },
];

const AttendanceSummaryPage = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">🗓️ Monthly Attendance Summary</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 shadow-lg">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Days Present</th>
              <th className="px-4 py-2 border">Days Absent</th>
              <th className="px-4 py-2 border">Month</th>
            </tr>
          </thead>
          <tbody>
            {mockAttendanceData.map((entry) => (
              <tr key={entry.employeeID} className="text-center">
                <td className="px-4 py-2 border">{entry.employeeID}</td>
                <td className="px-4 py-2 border">{entry.name}</td>
                <td className="px-4 py-2 border">{entry.daysPresent}</td>
                <td className="px-4 py-2 border">{entry.daysAbsent}</td>
                <td className="px-4 py-2 border">{entry.month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceSummaryPage;
