import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button onClick={() => navigate('/admin/employee-management')} className="btn">
          👥 Employee Management
        </button>
        <button onClick={() => navigate('/admin/attendance-tracker')} className="btn">
          📅 Attendance Tracker
        </button>
        <button onClick={() => navigate('/admin/leave-requests')} className="btn">
          📝 Leave Requests
        </button>
        <button onClick={() => navigate('/admin/salary-bonus')} className="btn">
          💰 Salary & Bonus
        </button>
        <button onClick={() => navigate('/admin/reports')} className="btn">
          📊 Reports
        </button>
        <button onClick={() => navigate('/admin/apr')} className="btn">
          📄 APR Page
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
