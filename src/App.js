import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/page-layout";
import { Login } from "./pages/login-page";
import Dashboard from "./pages/dashboardPage";
import { Patient } from "./pages/patient-page";
import { Notes } from "./pages/notes-page";
import { NotFoundPage } from "./pages/not-found-page";
import { AuthenticationGuard } from "./components/authentication-guard";

export function App() {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route element={<Layout />}>
			<Route
        path="dashboard"
        element={<AuthenticationGuard component={Dashboard} />}
      />
			<Route
        path="patient/:id"
        element={<AuthenticationGuard component={Patient} />}
      />
			<Route
        path="patient/:id/notes"
        element={<AuthenticationGuard component={Notes} />}
      />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
