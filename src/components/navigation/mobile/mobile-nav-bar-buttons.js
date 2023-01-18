import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { Box, Button, Center, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";

export const MobileNavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<Flex display={["flex", "flex", "none", "none"]}>
			<Menu>
				<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
				<MenuList>
          <MenuItem
            icon={<AddIcon />}>
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<ExternalLinkIcon />}>
            Shifts
          </MenuItem>
          <MenuItem
            icon={<RepeatIcon />}>
            Admin
            </MenuItem>
				</MenuList>
			</Menu>
			{/* <IconButton aria-label="Open Menu" icon={<HamburgerIcon />} /> */}
			{/* <Center>
				{!isAuthenticated && <LoginButton />}
				{isAuthenticated && <LogoutButton />}
			</Center> */}
		</Flex>
	);
};
