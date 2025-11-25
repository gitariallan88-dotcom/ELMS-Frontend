import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const sampleLeaves = [
  { id: 1, type: "Annual Leave", days: 3, status: "Pending" },
  { id: 2, type: "Sick Leave", days: 2, status: "Approved" },
];

const LeaveTracker = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="employee" />
      <div className="flex-1 p-6">
        <Navbar title="Leave Tracker" />
        <Card title="Your Leave Requests">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2">Type</th>
                <th className="p-2">Days</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleLeaves.map((leave) => (
                <tr key={leave.id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-2">{leave.type}</td>
                  <td className="p-2">{leave.days}</td>
                  <td className="p-2">{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default LeaveTracker;
