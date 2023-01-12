import LoginButton from "../components/buttons/LoginButton";
import { Outlet } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
	return (
		<div className="bg">
			<div className="login_card container col">
				<img src={require("../assets/images/lifecare-logo-with-text.png")} alt="logo" />
				<LoginButton />
				<Outlet />
			</div>
		</div>
	);
}

export default LoginPage;
