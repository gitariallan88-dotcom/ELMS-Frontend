import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useState } from "react";

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState(["HR", "IT", "Finance"]);
  const [newDept, setNewDept] = useState("");

  const addDepartment = () => {
    if (newDept.trim()) {
      setDepartments([...departments, newDept]);
      setNewDept("");
    }
  };

  const deleteDepartment = (name: string) => {
    setDepartments(departments.filter((d) => d !== name));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <Navbar title="Department Management" />
        <Card title="Manage Departments">
          <div className="flex gap-2 mb-4">
            <input
              value={newDept}
              onChange={(e) => setNewDept(e.target.value)}
              placeholder="New Department"
              className="p-2 border rounded dark:bg-gray-700 dark:text-white flex-1"
            />
            <Button onClick={addDepartment}>Add</Button>
          </div>
          <ul className="space-y-2">
            {departments.map((dept) => (
              <li key={dept} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                {dept}
                <Button onClick={() => deleteDepartment(dept)}>Delete</Button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentManagement;
