import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Wrap,
  WrapItem,
  Heading,
  Card,
  Center,
  CardBody,
  AlertIcon,
  Alert,
  Container,
} from "@chakra-ui/react";
import { TasksNotes } from "./buttons/tasks-notes-button";

export const PatientInfo = () => {
  const { id } = useParams();
	const { data: patient, error } = useFetch(`${process.env.REACT_APP_API_SERVER_URL}/api/patients/${id}`);

  let dob = new Date(patient?.dob).toLocaleDateString();

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      {patient && (
        <>
          <Center m="20px">
            <Wrap>
              <WrapItem>
                <Avatar size="2xl" src={patient.avatar} />
              </WrapItem>
            </Wrap>
          </Center>
          <Center m="10px">
            <Heading>{`${patient.first_name} ${patient.last_name}`}</Heading>
          </Center>
          <Center>
            <TasksNotes />
          </Center>
          <Container>
            <Card>
              <CardBody>
                <strong>Address: </strong>
                {patient.address}
                <br></br>
                <strong>Date of birth: </strong>
                {dob}
                <br></br>
                <strong>Emergency Contact: </strong>
                {patient.number}
              </CardBody>
            </Card>
          </Container>
        </>
      )}
    </>
  );
};
