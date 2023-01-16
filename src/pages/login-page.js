import { LoginButton } from "../components/buttons/login-button";

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
