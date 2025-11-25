import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext"; // <-- corrected import

import DashboardAdmin from "../pages/admin/Dashboard";
import DashboardUser from "../pages/employee/Dashboard";

const AppRoutes = () => {
return ( <ThemeProvider> <BrowserRouter> <Routes>
<Route path="/admin" element={<DashboardAdmin />} />
<Route path="/user" element={<DashboardUser />} /> </Routes> </BrowserRouter> </ThemeProvider>
);
};

export default AppRoutes;
