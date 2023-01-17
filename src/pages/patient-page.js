import { PatientInfo } from "../components/patient-info";
import { PatientOverview } from "../components/patient-overview";
import { PatientMedicalHistory } from "../components/patient-medical-history";
import { TasksNotes } from "../components/buttons/tasks-notes-button";
import { Center, Container } from "@chakra-ui/react";

export const Patient = () => {
  return (
    <Container>
      <Center>
        <TasksNotes />
      </Center>
      <PatientInfo />
      <PatientOverview />
      <PatientMedicalHistory />
    </Container>
  );
};
