import { LoginButton } from "../components/buttons/login-button";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/lifecare-logo__text.svg";

export function Login() {
  return (
    <Center height="100vh" bg="#319795">
      <div align="center">
        <Card maxW="md" align="center">
          <CardBody>
            <Logo height="18rem" />
          </CardBody>
          <CardFooter>
            <LoginButton />
          </CardFooter>
        </Card>
      </div>
    </Center>
  );
}
