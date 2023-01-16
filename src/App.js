import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/page-layout";
import { Login } from "./pages/login-page";
import Dashboard from "./pages/dashboard-page";
import { Patient } from "./pages/patient-page";
import { Notes } from "./pages/notes-page";
import { NotFoundPage } from "./pages/not-found-page";
import { AuthenticationGuard } from "./components/authentication-guard";
import useFetch from "./hooks/useFetch.js";

export function App() {
  // const carer_id = 1;
  let { data } = useFetch(`http://localhost:3005/api/carers/1`);

  // console.log(`here:`, data);

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
