
import { useParams, useNavigate } from "react-router-dom";
import { PatientProfile } from "../components/patient-profile";
import useFetch from "../hooks/useFetch";
import { Button, Container } from "@chakra-ui/react";

export const Patient = () => {
  const { id } = useParams();
  const {
    data: patient,
    isPending,
    error,
  } = useFetch(`http://localhost:3005/api/patients/${id}`);

	const navigate = useNavigate();

  const navigateToNotes = () => {
   
    navigate(`/patient/${id}/notes`);
  };

  return (
    <Container className="patient-details">
      <Button
        onClick={navigateToNotes}
        colorScheme="teal"
        size="md"
        className="tasks-notes"
      >
        Tasks & Notes
      </Button>
      <PatientProfile patient={patient} />
    </Container>
  );

};
