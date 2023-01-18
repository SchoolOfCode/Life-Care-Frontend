import { DesktopNavButtons } from "./desktop/desktop-nav-buttons";
import { ReactComponent as Logo } from "../../assets/lifecare-logo.svg";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import { HamburgerMenu } from "./mobile/hamburger-menu";

export const NavBar = () => {
	return (
		<Container maxW={"100%"}>
			<Flex align="center">
				<Logo height="50px" width="50px" />
				<Spacer h={"80px"} />
				<DesktopNavButtons />
				<HamburgerMenu />
			</Flex>
		</Container>
	);
};
