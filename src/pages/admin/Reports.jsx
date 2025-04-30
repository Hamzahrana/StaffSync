import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Generate Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <div
          onClick={() => navigate('/admin/reports/attendance-summary')}
          className="w-72 h-40 bg-blue-100 rounded-[30px] flex items-center justify-center cursor-pointer hover:bg-blue-200 transition"
        >
          📅 Attendance Summary
        </div>

        <div
          onClick={() => navigate('/admin/reports/performance')}
          className="w-72 h-40 bg-blue-100 rounded-[30px] flex items-center justify-center cursor-pointer hover:bg-blue-200 transition"
        >
          📈 Performance Report (APR)
        </div>

        <div
          onClick={() => navigate('/admin/reports/leave-overview')}
          className="w-72 h-40 bg-blue-100 rounded-[30px] flex items-center justify-center cursor-pointer hover:bg-blue-200 transition"
        >
          📝 Leave Overview
        </div>

        <div
          onClick={() => navigate('/admin/reports/salary-summary')}
          className="w-72 h-40 bg-blue-100 rounded-[30px] flex items-center justify-center cursor-pointer hover:bg-blue-200 transition"
        >
          💰 Salary Summary
        </div>

        <div
          onClick={() => navigate('/admin/reports/employee-summary')}
          className="w-72 h-40 bg-blue-100 rounded-[30px] flex items-center justify-center cursor-pointer hover:bg-blue-200 transition"
        >
          👤 Employee Summary
        </div>
      </div>
    </div>
  );
};

export default Reports;
