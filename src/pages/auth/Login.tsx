import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"employee" | "admin">("employee");

  const handleLogin = () => {
    if (role === "employee") navigate("/employee/dashboard");
    else navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-8 shadow rounded bg-white dark:bg-gray-800 w-96">
        <h1 className="text-2xl font-bold mb-6">Employee Leave Management</h1>
        <div className="flex flex-col gap-4">
          <label>
            Role:
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "employee" | "admin")}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>
            Email:
            <input type="email" className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </label>
          <label>
            Password:
            <input type="password" className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </label>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
