import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ClientProfilePage from "./pages/ClientProfilePage";
import TasksNotes from "./pages/TasksNotes";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/client-profile" element={<ClientProfilePage />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/tasks-notes" element={<TasksNotes />} />
		</Routes>
	);
}

export default App;
