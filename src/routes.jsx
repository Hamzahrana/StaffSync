import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/Dashboard';
import EmployeeDashboard from './pages/employee/Dashboard';
import ReportingDashboard from './pages/reportingOfficer/Dashboard';
import EmployeeManagement from './pages/admin/EmployeeManagement';
import AttendanceTracker from './pages/admin/AttendanceTracker';
import LeaveRequests from './pages/admin/LeaveRequests';
import SalaryBonus from './pages/admin/SalaryBonuses';
import Reports from './pages/admin/Reports';
import APRPage from './pages/admin/APRPage';
import EmployeeProfile from './pages/employee/Profile';
import EmployeeAttendance from './pages/employee/Attendance';
import LeaveApplication from './pages/employee/LeaveApplication';
import LeaveStatus from './pages/employee/LeaveStatus';
import PrivateRoute from './components/PrivateRoute';
import Subordinates from './pages/reportingOfficer/Subordinates';
import TeamAttendance from './pages/reportingOfficer/TeamAttendance';
import FeedbackComments from './pages/reportingOfficer/Feedback';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Admin Routes */}
      <Route
        path="/dashboard/admin"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route path="/admin/employee-management" element={<PrivateRoute allowedRoles={['admin']}><EmployeeManagement /></PrivateRoute>} />
      <Route path="/admin/attendance-tracker" element={<PrivateRoute allowedRoles={['admin']}><AttendanceTracker /></PrivateRoute>} />
      <Route path="/admin/leave-requests" element={<PrivateRoute allowedRoles={['admin']}><LeaveRequests /></PrivateRoute>} />
      <Route path="/admin/salary-bonus" element={<PrivateRoute allowedRoles={['admin']}><SalaryBonus /></PrivateRoute>} />
      <Route path="/admin/reports" element={<PrivateRoute allowedRoles={['admin']}><Reports /></PrivateRoute>} />
      <Route path="/admin/apr" element={<PrivateRoute allowedRoles={['admin']}><APRPage /></PrivateRoute>} />

      {/* Employee Routes */}
      <Route path="/dashboard/employee" element={<PrivateRoute allowedRoles={['employee']}><EmployeeDashboard /></PrivateRoute>} />
      <Route path="/employee/profile" element={<PrivateRoute allowedRoles={['employee']}><EmployeeProfile /></PrivateRoute>} />
      <Route path="/employee/attendance" element={<PrivateRoute allowedRoles={['employee']}><EmployeeAttendance /></PrivateRoute>} />
      <Route path="/employee/leave-application" element={<PrivateRoute allowedRoles={['employee']}><LeaveApplication /></PrivateRoute>} />
      <Route path="/employee/leave-status" element={<PrivateRoute allowedRoles={['employee']}><LeaveStatus /></PrivateRoute>} />

      {/* Reporting Officer Route */}

      <Route
  path="/dashboard/reporting-officer"
  element={
    <PrivateRoute allowedRoles={['reportingOfficer']}>
      <ReportingDashboard />
    </PrivateRoute>
  }
/>
<Route
  path="/reporting/subordinate-overview"
  element={
    <PrivateRoute allowedRoles={['reportingOfficer']}>
      <Subordinates />
    </PrivateRoute>
  }
/>
<Route
  path="/reporting/team-attendance"
  element={
    <PrivateRoute allowedRoles={['reportingOfficer']}>
      <TeamAttendance />
    </PrivateRoute>
  }
/>
<Route
  path="/reporting/feedback"
  element={
    <PrivateRoute allowedRoles={['reportingOfficer']}>
      <FeedbackComments />
    </PrivateRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;
