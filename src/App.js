import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ClientProfilePage from "./pages/ClientProfilePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />}>
				<Route path="/ClientProfilePage" element={<ClientProfilePage />} />
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
