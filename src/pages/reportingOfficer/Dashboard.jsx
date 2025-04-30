import { useNavigate } from 'react-router-dom';

const ReportingDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { label: 'Team Overview', path: '/reporting/team-overview', icon: '🗓️' },
    { label: 'Communication', path: '/reporting/communication', icon: '👥' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <div className="bg-blue-100 text-black py-4">
        <h1 className="text-3xl font-bold text-center">Reporting Officer Dashboard</h1>
      </div>
      <div className="bg-blue-100 flex-grow flex items-center justify-center py-8">
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="bg-blue-200 w-60 h-40 flex flex-col items-center justify-center rounded-2xl shadow-lg hover:bg-blue-300 cursor-pointer transition"
            >
              <div className="text-5xl mb-2">{card.icon}</div>
              <div className="text-lg font-semibold">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportingDashboard;
