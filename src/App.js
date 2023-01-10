import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
// import { AdminPage } from "./pages/admin-page";
import { Callback } from "./pages/Callback";
import { HomePage } from "./pages/Home";
// import { NotFoundPage } from "./pages/not-found-page";
import { Profile } from "./pages/Profile";
// import { ProtectedPage } from "./pages/protected-page";
// import { PublicPage } from "./pages/public-page";

export const App = () => {
	const { isLoading } = useAuth0();

	// possible animation? Just shows between login & callback page
	if (isLoading) {
		return (
			<div className="page-layout">
				<PageLoader />
			</div>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/profile" element={<Profile />} />
			{/* <Route path="/public" element={<PublicPage />} />
			<Route path="/protected" element={<ProtectedPage />} />
			<Route path="/admin" element={<AdminPage />} /> */}
			<Route path="/callback" element={<Callback />} />
			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Routes>
	);
};
