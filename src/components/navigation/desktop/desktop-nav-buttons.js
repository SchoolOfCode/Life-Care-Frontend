import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";

export const DesktopNavButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Flex display={["none", "none", "flex", "flex"]}>
      <Box>
        <Link to={"/dashboard"}>
          <Button variant="ghost" aria-label="Dashboard" my={5} w="100%">
            Dashboard
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to={"/shifts"}>
          <Button variant="ghost" aria-label="Shifts" my={5} w="100%">
            Shifts
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to={"/admin"}>
          <Button variant="ghost" aria-label="Admin" my={5} w="100%">
            Admin
          </Button>
        </Link>
      </Box>
      <Center>
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </Center>
    </Flex>
  );
};
