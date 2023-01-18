import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Heading, Card, Container, Center, CardBody } from "@chakra-ui/react";

export const PatientOverview = () => {
  const { id } = useParams();
  const {
    data: patient,
    isPending,
    error,
  } = useFetch(`http://localhost:3005/api/patients/${id}`);

  return (
    <Container>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {patient && (
        <>
          <Center m="20px">
            <Heading>Overview</Heading>
          </Center>
          <Card>
            <CardBody>{patient.overview}</CardBody>
          </Card>
        </>
      )}
    </Container>
  );
};
