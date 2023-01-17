import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import {
  Avatar,
  Wrap,
  WrapItem,
  Heading,
  Card,
  Container,
} from "@chakra-ui/react";



export const PatientProfile = (data) => {
  return (
    <Container className="patient-details">
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
        </WrapItem>
      </Wrap>
      <Heading>{data.patient_name}</Heading>
      <Card>{data && JSON.stringify(data)}</Card>
    </Container>
  );
};
