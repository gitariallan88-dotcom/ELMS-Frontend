import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <Navbar title="Admin Dashboard" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card title="Total Employees">
            <p>25</p>
          </Card>
          <Card title="Pending Leave Requests">
            <p>3</p>
          </Card>
          <Card title="Departments">
            <p>HR, IT, Finance</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
