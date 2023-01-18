import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

export const TasksNotes = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const navigateToNotes = () => {
		navigate(`/patient/${id}/notes`);
	};

	return (
		<Button m="20px" onClick={navigateToNotes} colorScheme="teal" size="md" className="tasks-notes">
			Tasks & Notes
		</Button>
	);
};
