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
import EmployeeProfile from './pages/employee/Profile';
import EmployeeAttendance from './pages/employee/Attendance';
import LeaveApplication from './pages/employee/LeaveApplication';
import LeaveStatus from './pages/employee/LeaveStatus';
import PrivateRoute from './components/PrivateRoute';
import Communication from './pages/reportingOfficer/Communication';
import AttendanceSummary from './pages/admin/reports/AttendanceSummary';
import PerformanceReport from './pages/admin/reports/PerformanceReport.jsx';
import LeaveOverview from './pages/admin/reports/LeaveOverview';
import SalarySummaryPage from './pages/admin/reports/SalarySummary';
import EmployeeSummaryPage from './pages/admin/reports/EmployeeSummary';
import CommunicationPage from './pages/reportingOfficer/Communication';
import TeamOverviewPage from './pages/reportingOfficer/TeamOverview.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/dashboard/admin" element={<PrivateRoute allowedRoles={['admin']}><AdminDashboard /></PrivateRoute>} />
      <Route path="/admin/employee-management" element={<PrivateRoute allowedRoles={['admin']}><EmployeeManagement /></PrivateRoute>} />
      <Route path="/admin/attendance-tracker" element={<PrivateRoute allowedRoles={['admin']}><AttendanceTracker /></PrivateRoute>} />
      <Route path="/admin/leave-requests" element={<PrivateRoute allowedRoles={['admin']}><LeaveRequests /></PrivateRoute>} />
      <Route path="/admin/salary-bonus" element={<PrivateRoute allowedRoles={['admin']}><SalaryBonus /></PrivateRoute>} />
      <Route path="/admin/reports" element={<PrivateRoute allowedRoles={['admin']}><Reports /></PrivateRoute>} />
      <Route path="/admin/reports/performance" element={<PrivateRoute allowedRoles={['admin']}><PerformanceReport /></PrivateRoute>} />
      <Route path="/admin/reports/attendance-summary" element={<PrivateRoute allowedRoles={['admin']}><AttendanceSummary /></PrivateRoute>} />
      
      <Route path="/admin/reports/leave-overview" element={<PrivateRoute allowedRoles={['admin']}><LeaveOverview /></PrivateRoute>} />
      <Route path="/admin/reports/salary-summary" element={<PrivateRoute allowedRoles={['admin']}><SalarySummaryPage /></PrivateRoute>} />
      <Route path="/admin/reports/employee-summary" element={<PrivateRoute allowedRoles={['admin']}><EmployeeSummaryPage /></PrivateRoute>} />

      {/* Employee Routes */}
      <Route path="/dashboard/employee" element={<PrivateRoute allowedRoles={['employee']}><EmployeeDashboard /></PrivateRoute>} />
      <Route path="/employee/profile" element={<PrivateRoute allowedRoles={['employee']}><EmployeeProfile /></PrivateRoute>} />
      <Route path="/employee/attendance" element={<PrivateRoute allowedRoles={['employee']}><EmployeeAttendance /></PrivateRoute>} />
      <Route path="/employee/leave-application" element={<PrivateRoute allowedRoles={['employee']}><LeaveApplication /></PrivateRoute>} />
      <Route path="/employee/leave-status" element={<PrivateRoute allowedRoles={['employee']}><LeaveStatus /></PrivateRoute>} />

      {/* Reporting Officer Routes */}
      <Route path="/dashboard/reporting-officer" element={<PrivateRoute allowedRoles={['reportingOfficer']}><ReportingDashboard /></PrivateRoute>} />
      <Route path="/reporting/communication" element={<PrivateRoute allowedRoles={['reportingOfficer']}><CommunicationPage /></PrivateRoute>} />
      <Route path="/reporting/team-overview" element={<PrivateRoute allowedRoles={['reportingOfficer']}><TeamOverviewPage /></PrivateRoute>} />
    </Routes>
  );
}

export default AppRoutes;
