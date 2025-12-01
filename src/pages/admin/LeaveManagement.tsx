import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Button from "../../components/Button";

const sampleLeaves = [
  { id: 1, employee: "John Doe", type: "Annual Leave", days: 3, status: "Pending" },
  { id: 2, employee: "Jane Smith", type: "Sick Leave", days: 2, status: "Approved" },
  { id: 3, employee: "Brian Kemboi", type: "Paternity Leave", days: 90, status: "Denied"}
];

const LeaveManagement = () => {
  const handleUpdate = (id: number, status: string) => {
    alert(`Leave ${id} updated to ${status}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <Navbar title="Manage Leave Requests" />
        <Card title="All Leave Requests">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2">Employee</th>
                <th className="p-2">Type</th>
                <th className="p-2">Days</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleLeaves.map((leave) => (
                <tr key={leave.id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-2">{leave.employee}</td>
                  <td className="p-2">{leave.type}</td>
                  <td className="p-2">{leave.days}</td>
                  <td className="p-2">{leave.status}</td>
                  <td className="p-2 flex gap-2">
                    <Button onClick={() => handleUpdate(leave.id, "Approved")}>Approve</Button>
                    <Button onClick={() => handleUpdate(leave.id, "Denied")}>Deny</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default LeaveManagement;
