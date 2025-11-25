import {Routes, Route } from "react-router-dom";
import DashboardAdmin from "../pages/admin/Dashboard";
import DashboardUser from "../pages/employee/Dashboard";
import LeaveManagement from "../pages/admin/LeaveManagement";
import DepartmentManagement from "../pages/admin/DepartmentManagement";
import EmployeeDashboard from "../pages/employee/Dashboard";
import LeaveRequest from "../pages/employee/LeaveRequest";
import LeaveTracker from "../pages/employee/LeaveTracker";
import Login from "../pages/Login";
const AppRoutes = () => {
  return (
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path='/employee/dashboard' element={<EmployeeDashboard/>}/>
          <Route path='/employee/leave-request' element={<LeaveRequest/>}/>
          <Route path='/employee/leave-tracker' element={<LeaveTracker/>}/>
          <Route path="/user" element={<DashboardUser />} />
          <Route path='/admin/leave-management' element={<LeaveManagement/>}/>
          <Route path='/admin/department-management' element={<DepartmentManagement/>}/>
        </Routes>
  );
};

export default AppRoutes;
