import Dashboard from "../src/components/dashboard/Dashboard";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path=""/>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;