import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EmployeeAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const mockAttendance = [
    { date: '2025-04-25', status: 'Present' },
    { date: '2025-04-24', status: 'Absent' },
    { date: '2025-04-23', status: 'Present' },
    { date: '2025-04-22', status: 'Leave' },
    { date: '2025-04-21', status: 'Present' },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-green-400 text-white';
      case 'Absent':
        return 'bg-red-400 text-white';
      case 'Leave':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-300 text-black';
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-black-500 mb-8">Attendance Records</h1>

      <div className="bg-blue-100 p-6 rounded-xl shadow-md w-full max-w-4xl">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="w-full p-4"
        />
      </div>

      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Recent Attendance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-xl">
            <thead className="bg-blue-300 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAttendance.map((record, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6">{record.date}</td>
                  <td className="py-3 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
