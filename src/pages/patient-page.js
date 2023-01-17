import { Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { PatientProfile } from "../components/patient-profile";
import useFetch from "../hooks/useFetch";

export const Patient = () => {
	const { id } = useParams();
	const { data: patient, isPending, error } = useFetch(`http://localhost:3005/api/patient/${id}`);

	const navigate = useNavigate();

	const navigateToNotes = () => {
		// 👇️ navigate to /contacts
		navigate("notes");
	};

	return (
		<div className="patient-details">
			<h1>Patient Page</h1>
			{error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {patient && JSON.stringify(patient)}
			<PatientProfile />
			<Button onClick={navigateToNotes} colorScheme="teal" size="md" className="tasks-notes">
				Tasks & Notes
			</Button>
		</div>
	);
};
