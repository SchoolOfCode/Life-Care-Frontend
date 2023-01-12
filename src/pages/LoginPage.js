import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import LoginButton from "../components/buttons/LoginButton";
import LogoutButton from "../components/buttons/LogoutButton";
import { Outlet } from "react-router-dom";
import '../styles/LoginPage.css'

function LoginPage() {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
	const [userMetadata, setUserMetadata] = useState(null);

	useEffect(() => {
		const getUserMetadata = async () => {
			const domain = process.env.REACT_APP_DOMAIN;

			try {
				const accessToken = await getAccessTokenSilently({
					audience: `https://${domain}/api/v2/`,
					scope: "read:current_user",
				});

				const userDetailsByIdUrl = await `https://${domain}/api/v2/users/${user.sub}`;

				const metadataResponse = await fetch(userDetailsByIdUrl, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				const { user_metadata } = await metadataResponse.json();

				setUserMetadata(user_metadata);
			} catch (e) {
				console.log(e.message);
			}
		};

		getUserMetadata();
	}, [getAccessTokenSilently, user?.sub]);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	let userPicture;
	let userName;

	isAuthenticated ? (userPicture = user.picture) : (userPicture = "lifecare-logo.png");

	isAuthenticated ? (userName = user.name) : (userName = "Guest");

	return (
		<div className="container">
			<ul>
				{isAuthenticated ? (
					<li>
						<LogoutButton />
					</li>
				) : (
					<li>
						<LoginButton />
					</li>
				)}

				<li id="profile">Hi, {userName}!</li>
				<img src={userPicture} alt="userImage" />
			</ul>
			<Outlet />
		</div>
	);
}

export default LoginPage;
