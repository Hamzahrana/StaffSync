import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AttendanceTracker = () => {
  const mockAttendanceData = [
    { employeeID: '101', date: '2025-04-25', status: 'present' },
    { employeeID: '101', date: '2025-04-24', status: 'absent' },
    { employeeID: '101', date: '2025-04-23', status: 'present' },
    { employeeID: '101', date: '2025-04-22', status: 'leave' },
    { employeeID: '101', date: '2025-04-21', status: 'present' },
    { employeeID: '102', date: '2025-04-25', status: 'absent' },
    { employeeID: '102', date: '2025-04-24', status: 'present' },
    { employeeID: '102', date: '2025-04-23', status: 'leave' },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEmployeeID, setSelectedEmployeeID] = useState('101');

  const filteredData = mockAttendanceData
    .filter((entry) => entry.employeeID === selectedEmployeeID)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const getStatusForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const entry = filteredData.find((d) => d.date === dateString);
    return entry?.status || null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const status = getStatusForDate(date);
      if (status === 'present') return 'bg-green-500 text-white rounded-md';
      if (status === 'absent') return 'bg-red-500 text-white rounded-md';
      if (status === 'leave') return 'bg-gray-500 text-white rounded-md';
    }
    return '';
  };

  const handleDateChange = (newDate) => setSelectedDate(newDate);

  return (
    <div className="min-h-screen p-6 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-4">Attendance Records</h2>

      <div className="flex justify-center mb-6">
        <select
          className="border p-2 rounded shadow"
          value={selectedEmployeeID}
          onChange={(e) => setSelectedEmployeeID(e.target.value)}
        >
          <option value="101">Employee 101</option>
          <option value="102">Employee 102</option>
        </select>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Recent Attendance</h3>
        <table className="w-full border text-center rounded overflow-hidden">
          <thead>
            <tr className="bg-blue-300 text-white">
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, 10).map((entry) => (
              <tr key={entry.date} className="border-b">
                <td className="p-2">{entry.date}</td>
                <td className="p-2">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      entry.status === 'present'
                        ? 'bg-green-500'
                        : entry.status === 'absent'
                        ? 'bg-red-400'
                        : 'bg-gray-600'
                    }`}
                  >
                    {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={2} className="py-4 text-gray-500">
                  No attendance records available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTracker;
