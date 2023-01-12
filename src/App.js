import Dashboard from "../src/components/dashboard/Dashboard";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ClientProfilePage from "./pages/ClientProfilePage"


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="clientProfilePage" element={<ClientProfilePage/>}/>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;