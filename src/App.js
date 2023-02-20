import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/page-layout";
import { Login } from "./pages/login-page";
import { Dashboard } from "./pages/dashboard-page";
import Shifts from "./pages/shifts";
import Admin from "./pages/admin";
import { Patient } from "./pages/patient-page";
import { Notes } from "./pages/notes-page";
import { NotFoundPage } from "./pages/not-found-page";
import { AuthenticationGuard } from "./components/authentication-guard";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "./components/page-loader";

export function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <PageLoader />;

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path="dashboard"
          element={<AuthenticationGuard component={Dashboard} />}
        />
        <Route
          path="shifts"
          element={<AuthenticationGuard component={Shifts} />}
        />
        <Route
          path="admin"
          element={<AuthenticationGuard component={Admin} />}
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
