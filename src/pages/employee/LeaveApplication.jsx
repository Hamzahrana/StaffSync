import { useState } from 'react';

const LeaveApplication = () => {
  const [leaveType, setLeaveType] = useState('Sick');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveReason, setLeaveReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const leaveRequest = {
      leaveID: Date.now().toString(),
      employeeID: '101', // Replace with actual employee ID
      leaveType,
      startDate,
      endDate,
      leaveReason,
    };
    console.log('Leave Request Submitted:', leaveRequest);
    alert('Leave request submitted!');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-start py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Apply for Leave
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Leave Type</label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Sick">Sick</option>
            <option value="Vacation">Vacation</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Reason</label>
          <textarea
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Leave Request
        </button>
      </form>
    </div>
  );
};

export default LeaveApplication;
