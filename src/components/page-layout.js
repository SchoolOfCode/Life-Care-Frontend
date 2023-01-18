import { Outlet } from "react-router-dom";
import { NavBar } from "./navigation/desktop/nav-bar";
import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";

export const Layout = ({ children }) => {
	return (
		<div className="layout">
			<NavBar />
			{/* <MobileNavBar /> */}
			<div className="page-layout__content">{children}</div>
			<Outlet />
		</div>
	);
};
