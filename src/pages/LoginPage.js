import LoginButton from "../components/buttons/LoginButton";
import LogoutButton from "../components/buttons/LogoutButton";
import { Outlet } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
	return (
		<div className="bg">
			<div className="login_card container col">
				<div>Logo</div>
				<LogoutButton />
				<LoginButton />
				<Outlet />
			</div>
		</div>
	);
}

export default LoginPage;
