import { useNavigate } from 'react-router-dom';

const GenerateReport = () => {
  const navigate = useNavigate();

  const reportLinks = [
    { name: "Attendance Summary", path: "/reporting/reports/attendance-summary" },
    { name: "Performance Report (APR)", path: "/reporting/reports/performance" },
    { name: "Leave Overview", path: "/reporting/reports/leave-overview" },
    { name: "Salary Summary", path: "/reporting/reports/salary-summary" },
    { name: "Employee Summary", path: "/reporting/reports/employee-summary" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Generate Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportLinks.map((report) => (
          <button
            key={report.name}
            onClick={() => navigate(report.path)}
            className="p-4 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
          >
            {report.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenerateReport;
