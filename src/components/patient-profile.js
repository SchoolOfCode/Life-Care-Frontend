import {
  Avatar,
  Wrap,
  WrapItem,
  Heading,
  Card,
  Container,
  Center,
} from "@chakra-ui/react";

export const PatientProfile = (data) => {
  return (
    <Container className="patient-details">
      <Center p="20px">
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </WrapItem>
        </Wrap>
      </Center>
      <Heading key={data.patient_id}>{data.patient_name}</Heading>
      <Card>{data && JSON.stringify(data)}</Card>
    </Container>
  );
};
