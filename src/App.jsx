import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/Dashboard';
import EmployeeDashboard from './pages/employee/Dashboard';
import ReportingDashboard from './pages/reportingOfficer/Dashboard.jsx';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard/admin"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/employee"
        element={
          <PrivateRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/reporting-officer"
        element={
          <PrivateRoute allowedRoles={['reportingOfficer']}>
            <ReportingDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
