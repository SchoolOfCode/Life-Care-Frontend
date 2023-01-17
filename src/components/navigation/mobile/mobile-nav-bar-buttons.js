import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export const MobileNavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

	return (
		<div className="mobile-nav-bar__buttons">
			<IconButton colorScheme="blue" aria-label="Search database" icon={<GiHamburgerMenu />} />
			{!isAuthenticated && <LoginButton />}
			{isAuthenticated && <LogoutButton />}
		</div>
	);
};
