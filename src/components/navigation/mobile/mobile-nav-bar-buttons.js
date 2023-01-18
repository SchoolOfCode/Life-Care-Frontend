import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { Box, Button, Center, Flex, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export const MobileNavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<Flex display={["flex", "flex", "none", "none"]}>
			<IconButton colorScheme="blue" aria-label="Search database" icon={<GiHamburgerMenu />} />
			{/* <Center>
				{!isAuthenticated && <LoginButton />}
				{isAuthenticated && <LogoutButton />}
			</Center> */}
		</Flex>
	);
};
