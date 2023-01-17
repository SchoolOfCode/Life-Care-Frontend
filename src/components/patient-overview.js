import { Heading, Card, Container, Center, CardBody } from "@chakra-ui/react";

export const PatientOverview = () => {
  return (
    <Container className="patient-overview">
      <Center m="20px">
        <Heading>Overview</Heading>
      </Center>
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae nulla mi. Etiam lacinia leo justo, non egestas arcu feugiat.
        </CardBody>
      </Card>
    </Container>
  );
};
