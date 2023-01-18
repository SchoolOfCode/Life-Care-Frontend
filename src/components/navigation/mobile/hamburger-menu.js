import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

export const HamburgerMenu = () => {
	return (
		<Flex display={["flex", "flex", "none", "none"]}>
			<Menu>
				<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon boxSize={7} />} variant="outline" />
				<MenuList>
					<Link as={ReactRouterLink} to="/dashboard" style={{ textDecoration: "none" }}>
						<MenuItem>Dashboard</MenuItem>
					</Link>
					<Link as={ReactRouterLink} to="#" style={{ textDecoration: "none" }}>
						<MenuItem>Shifts</MenuItem>
					</Link>
					<Link as={ReactRouterLink} to="#" style={{ textDecoration: "none" }}>
						<MenuItem>Admin</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Flex>
	);
};
