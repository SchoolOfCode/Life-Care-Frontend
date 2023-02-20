import { Outlet } from "react-router-dom";
import { NavBar } from "./navigation/nav-bar";

export const Layout = ({ children }) => {
	return (
		<div className="layout">
			<NavBar />
			<div className="page-layout__content">{children}</div>
			<Outlet />
		</div>
	);
};
