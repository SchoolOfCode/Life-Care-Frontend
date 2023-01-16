import { LoginButton } from "../components/buttons/login-button";
import { Card, Image, CardBody, CardFooter } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

export function Login() {
  return (
    <Center height="vh" bg="teal">
      <div align="center">
        <Card maxW="md" align="center">
          <CardBody>
            <Image
              src={require("../assets/images/lifecare-logo-with-text.png")}
              alt="Life Care logo"
              borderRadius="lg"
            />
          </CardBody>
          <CardFooter>
            <LoginButton />
          </CardFooter>
        </Card>
      </div>
    </Center>
  );
}
