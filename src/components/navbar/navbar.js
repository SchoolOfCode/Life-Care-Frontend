import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../buttons/login-button";
import { LogoutButton } from "../buttons/logout-button";

export const Navbar = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<div className="nav-bar__buttons">
			{!isAuthenticated && (
				<>
					<LoginButton />
				</>
			)}
			{isAuthenticated && (
				<>
					<LogoutButton />
				</>
			)}
		</div>
	);
};