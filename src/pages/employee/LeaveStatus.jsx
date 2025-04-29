// src/pages/employee/LeaveStatus.jsx
const LeaveStatus = () => {
  const mockLeaveReports = [
    {
      leaveID: 'L001',
      employeeID: '101',
      startDate: '2025-04-10',
      endDate: '2025-04-12',
      leaveType: 'Sick',
      leaveReason: 'Flu'
    },
    {
      leaveID: 'L002',
      employeeID: '101',
      startDate: '2025-03-01',
      endDate: '2025-03-05',
      leaveType: 'Vacation',
      leaveReason: 'Family trip'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Leave History</h2>
      <div className="grid gap-4">
        {mockLeaveReports.map((leave) => (
          <div key={leave.leaveID} className="bg-blue-100 p-4 rounded shadow">
            <p><strong>Type:</strong> {leave.leaveType}</p>
            <p><strong>Dates:</strong> {leave.startDate} to {leave.endDate}</p>
            <p><strong>Reason:</strong> {leave.leaveReason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveStatus;
