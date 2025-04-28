import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Light Blue Header Section */}
      <div className="bg-blue-100 py-8">
        <h1 className="text-3xl font-bold text-center text-black-400">Employee Dashboard</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-8">
        <div
          onClick={() => navigate('/employee/profile')}
          className="cursor-pointer bg-blue-100 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">👤</span>
          <h2 className="text-xl font-semibold text-gray-800">View Profile</h2>
        </div>

        <div
          onClick={() => navigate('/employee/attendance')}
          className="cursor-pointer bg-blue-100 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">📅</span>
          <h2 className="text-xl font-semibold text-gray-800">View Attendance</h2>
        </div>

        <div
          onClick={() => navigate('/employee/leave-application')}
          className="cursor-pointer bg-blue-100 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">📝</span>
          <h2 className="text-xl font-semibold text-gray-800">Apply Leave</h2>
        </div>

        <div
          onClick={() => navigate('/employee/leave-status')}
          className="cursor-pointer bg-blue-100 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">📄</span>
          <h2 className="text-xl font-semibold text-gray-800">Leave Status</h2>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
