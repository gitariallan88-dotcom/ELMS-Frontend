import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("employee");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "employee") {
      navigate("/employee/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Employee Leave Management System
        </h2>

        <div className="flex flex-col gap-4">
          <label className="text-gray-700 dark:text-gray-300">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </label>

          <label className="text-gray-700 dark:text-gray-300">
            Role:
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
