import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Button
      colorScheme="teal"
      size="md"
      ml={4}
      onClick={handleLogout}
    >
      Log Out
    </Button>
  );
};
