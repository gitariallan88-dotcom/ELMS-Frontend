import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const EmployeeDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="employee" />
      <div className="flex-1 p-6">
        <Navbar title="Employee Dashboard" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card title="Available Leaves">
            <p>Annual: 10 days</p>
            <p>Sick: 5 days</p>
          </Card>
          <Card title="Pending Requests">
            <p>No pending requests</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
