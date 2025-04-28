import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importing styles for react-calendar

const AttendanceTracker = () => {
  const mockAttendanceData = [
    { employeeID: '101', date: '2025-04-01', status: 'present' },
    { employeeID: '101', date: '2025-04-02', status: 'absent' },
    { employeeID: '101', date: '2025-04-03', status: 'leave' },
    { employeeID: '102', date: '2025-04-01', status: 'absent' },
    { employeeID: '102', date: '2025-04-02', status: 'present' },
    { employeeID: '102', date: '2025-04-03', status: 'leave' },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEmployeeID, setSelectedEmployeeID] = useState('101');
  const [attendanceData, setAttendanceData] = useState(mockAttendanceData);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const filteredAttendanceData = attendanceData.filter(
    (data) => data.employeeID === selectedEmployeeID
  );

  const getAttendanceStatus = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const status = filteredAttendanceData.find((data) => data.date === dateString);
    return status ? status.status : null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const status = getAttendanceStatus(date);
      if (status === 'present') return "bg-green-500 rounded-[10px]";
      if (status === 'absent') return "bg-red-500 rounded-[10px]";
      if (status === 'leave') return "bg-gray-500 rounded-[10px]";
    }
    return '';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-blue-100 p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Attendance Tracker</h2>

        <div className="mb-6">
          <label htmlFor="employeeID" className="block text-sm font-medium">Select Employee</label>
          <select
            id="employeeID"
            value={selectedEmployeeID}
            onChange={(e) => setSelectedEmployeeID(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          >
            <option value="101">Employee 101</option>
            <option value="102">Employee 102</option>
          </select>
        </div>

        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={tileClassName} 
        />
      </div>
    </div>
  );
};

export default AttendanceTracker;
