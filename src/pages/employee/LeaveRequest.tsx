import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import Card from "../../components/Card";

const leaveTypes = [
  { type: "Annual Leave", maxDays: 10 },
  { type: "Sick Leave", maxDays: 5 },
  { type: "Maternity/Paternity", maxDays: 90 },
];

const LeaveRequest = () => {
  const [selectedType, setSelectedType] = useState(leaveTypes[0].type);
  const [days, setDays] = useState(1);
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    alert(`Requested ${days} day(s) for ${selectedType}.\nReason: ${reason}`);
    setDays(1);
    setReason("");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar role="employee" />
      <div className="flex-1 p-6">
        <Navbar title="Request Leave" />
        <Card title="Create Leave Request">
          <div className="flex flex-col gap-4">
            <label>
              Leave Type:
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
              >
                {leaveTypes.map((l) => (
                  <option key={l.type} value={l.type}>
                    {l.type} (Max {l.maxDays} days)
                  </option>
                ))}
              </select>
            </label>
            <label>
              Number of Days:
              <input
                type="number"
                value={days}
                min={1}
                max={leaveTypes.find((l) => l.type === selectedType)?.maxDays || 1}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label>
              Reason:
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
              />
            </label>
            <Button onClick={handleSubmit}>Submit Request</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeaveRequest;
