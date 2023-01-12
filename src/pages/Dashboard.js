import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import LoginButton from "../components/buttons/LoginButton";
import LogoutButton from "../components/buttons/LogoutButton";
// import { Outlet, Link } from "react-router-dom";
import ClientList from "../components/clientList/ClientList";
// import ClientProfile from "../components/clientProfile/ClientProfile";

const Dashboard = () => {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
	const [userMetadata, setUserMetadata] = useState(null);

	useEffect(() => {
		const getUserMetadata = async () => {
			const domain = process.env.REACT_APP_AUTH0_DOMAIN;

			try {
				const accessToken = await getAccessTokenSilently({
					audience: `https://${domain}/api/v2/`,
					scope: "read:current_user",
				});

				const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

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

	return (
		isAuthenticated && (
			<div className="carer-dashboard">
			<LogoutButton />
				<div className="profilePicture"></div>
				<div className="userInfo">
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
				<div>
					<ClientList />
				</div>
			</div>
		)
	);
};

export default Dashboard;
