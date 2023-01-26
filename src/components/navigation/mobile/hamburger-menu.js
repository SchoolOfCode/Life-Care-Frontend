import { Button, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const HamburgerMenu = () => {
	const { logout } = useAuth0();

	const handleLogout = () => {
		logout({
			returnTo: window.location.origin,
		});
	};

	return (
		<Flex display={["flex", "flex", "none", "none"]}>
			<Menu>
				<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon boxSize={7} />} variant="outline" />
				<MenuList>
					<Link as={ReactRouterLink} to="/dashboard" style={{ textDecoration: "none" }}>
						<MenuItem>Dashboard</MenuItem>
					</Link>
					<Link as={ReactRouterLink} to="#" style={{ textDecoration: "none" }}>
						<MenuItem>Shifts - coming soon!</MenuItem>
					</Link>
					<Link as={ReactRouterLink} to="#" style={{ textDecoration: "none" }}>
						<MenuItem>Admin - coming soon!</MenuItem>
					</Link>
					<MenuItem as={Button} onClick={handleLogout} style={{ fontWeight: "400", justifyContent: "left" }}>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};
