import { LoginButton } from "../components/buttons/login-button";
import "../styles/Login.css";

export function Login() {
	return (
		<div>
			<div className="login_card container col">
				<img src={require("../assets/images/lifecare-logo-with-text.png")} alt="logo" />
				<LoginButton />
			</div>
		</div>
	);
}
