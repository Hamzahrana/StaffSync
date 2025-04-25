import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Employee Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button onClick={() => navigate('/employee/profile')} className="btn">
          👥 View Profile
        </button>
        <button onClick={() => navigate('/employee/attendance')} className="btn">
          📅 View Attendance
        </button>
        <button onClick={() => navigate('/employee/leave-application')} className="btn">
          📝 Apply Leave
        </button>
        <button onClick={() => navigate('/employee/leave-status')} className="btn">
          📄 Leave Status
        </button>
       
      </div>
    </div>
  );
};

export default EmployeeDashboard;
