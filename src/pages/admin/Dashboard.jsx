import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-0">
      <div className="w-full bg-blue-100 p-6 flex justify-center shadow-md">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-4">

      <div
        onClick={() => navigate('/admin/employee-management')}
        className="w-80 h-64 bg-blue-100 p-4 rounded-[50px] flex justify-center items-center hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer mt-4"
      >
        <span className="text-lg font-semibold">
          👥 Employee Management
        </span>
      </div>

      <div
        onClick={() => navigate('/admin/attendance-tracker')}
        className="w-80 h-64 bg-blue-100 p-4 rounded-[50px] flex justify-center items-center hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer mt-4"
      >
        <span className="text-lg font-semibold">
          📅 Attendance Tracker
        </span>
      </div>

      <div
        onClick={() => navigate('/admin/leave-requests')}
        className="w-80 h-64 bg-blue-100 p-4 rounded-[50px] flex justify-center items-center hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer mt-4"
      >
        <span className="text-lg font-semibold">
          📝 Leave Requests
        </span>
      </div>

      

      <div
        onClick={() => navigate('/admin/reports')}
        className="w-80 h-64 bg-blue-100 p-4 rounded-[50px] flex justify-center items-center hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer mt-4"
      >
        <span className="text-lg font-semibold">
          📊 Reports
        </span>
      </div>

      <div
        onClick={() => navigate('/admin/apr')}
        className="w-80 h-64 bg-blue-100 p-4 rounded-[50px] flex justify-center items-center hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer mt-4"
      >
        <span className="text-lg font-semibold">
          📄 APR Page
        </span>
      </div>

      </div>

      
    </div>
  );
};

export default AdminDashboard;

