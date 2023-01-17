import { NavBarButtons } from "./nav-bar-buttons";
import { ReactComponent as Logo } from "../../../assets/lifecare-logo.svg";
import { Container, Flex, Spacer } from "@chakra-ui/react";

export const NavBar = () => {
	return (
		<Container maxW={'100%'}>
      <Flex align='center'>
        <Logo height="50px" width='50px' />
        <Spacer/>
        <NavBarButtons />
      </Flex>
    </Container>
	);
};
