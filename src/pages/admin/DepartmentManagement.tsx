import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useState } from "react";

const DepartmentManagement = () => {
  // Departments and employees (temporary local state)
  const [departments, setDepartments] = useState([
    { name: "HR", employees: ["Alice", "Bob"] },
    { name: "IT", employees: ["John", "Grace"] },
    { name: "Finance", employees: ["Michael", "Sarah"] },
  ]);

  const [newDept, setNewDept] = useState("");
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const [newEmployee, setNewEmployee] = useState("");

  // Add a department
  const addDepartment = () => {
    if (!newDept.trim()) return;

    setDepartments([...departments, { name: newDept, employees: [] }]);
    setNewDept("");
  };

  // Delete department
  const deleteDepartment = (deptName: string) => {
    setDepartments(departments.filter((d) => d.name !== deptName));
    if (selectedDept === deptName) setSelectedDept(null);
  };

  // Add employee
  const addEmployee = () => {
    if (!newEmployee.trim() || !selectedDept) return;

    setDepartments(
      departments.map((dept) =>
        dept.name === selectedDept
          ? { ...dept, employees: [...dept.employees, newEmployee] }
          : dept
      )
    );

    setNewEmployee("");
  };

  // Remove employee
  const removeEmployee = (emp: string) => {
    if (!selectedDept) return;

    setDepartments(
      departments.map((dept) =>
        dept.name === selectedDept
          ? {
              ...dept,
              employees: dept.employees.filter((e) => e !== emp),
            }
          : dept
      )
    );
  };

  const selected = departments.find((d) => d.name === selectedDept);

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
              <li
                key={dept.name}
                className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded"
              >
                <button
                  onClick={() =>
                    setSelectedDept(
                      selectedDept === dept.name ? null : dept.name
                    )
                  }
                  className="text-left flex-1 font-medium"
                >
                  {dept.name}
                </button>

                <Button onClick={() => deleteDepartment(dept.name)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </Card>

        {selectedDept && (
          <Card title={`Employees in ${selectedDept}`}>
            <div className="flex gap-2 mb-4">
              <input
                value={newEmployee}
                onChange={(e) => setNewEmployee(e.target.value)}
                placeholder="Add Employee"
                className="p-2 border rounded dark:bg-gray-700 dark:text-white flex-1"
              />
              <Button onClick={addEmployee}>Add</Button>
            </div>

            <ul className="space-y-2">
              {selected?.employees.length ? (
                selected.employees.map((emp) => (
                  <li
                    key={emp}
                    className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded"
                  >
                    {emp}

                    <Button onClick={() => removeEmployee(emp)}>
                      Remove
                    </Button>
                  </li>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-300">
                  No employees yet.
                </p>
              )}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DepartmentManagement;
