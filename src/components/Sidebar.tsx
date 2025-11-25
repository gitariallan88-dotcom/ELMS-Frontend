import { Link } from "react-router-dom";

type SidebarProps = {
  role: "employee" | "admin";
};

const Sidebar = ({ role }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen p-4 shadow">
      <ul className="flex flex-col gap-3">
        {role === "employee" ? (
          <>
            <li>
              <Link to="/employee/dashboard" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/employee/leave-request" className="hover:underline">Request Leave</Link>
            </li>
            <li>
              <Link to="/employee/leave-tracker" className="hover:underline">Track Leave</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/leave-management" className="hover:underline">Manage Leaves</Link>
            </li>
            <li>
              <Link to="/admin/department-management" className="hover:underline">Manage Departments</Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
