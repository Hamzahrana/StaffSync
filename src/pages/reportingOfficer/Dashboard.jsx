import { useNavigate } from 'react-router-dom';

const ReportingDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Reporting Officer Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button onClick={() => navigate('/reporting/subordinate-overview')} className="btn">
          👥 Subordinate Overview
        </button>
        <button onClick={() => navigate('/reporting/team-attendance')} className="btn">
          📅 Team Attendance
        </button>
        <button onClick={() => navigate('/reporting/feedback')} className="btn">
          💬 Feedback / Comments
        </button>
        
      </div>
    </div>
  );
};

export default ReportingDashboard;
