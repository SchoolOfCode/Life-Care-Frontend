import { Alert, AlertIcon } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Note } from "./note";

export const NotesList = () => {
	const { id } = useParams();
	const { data: notes, error } = useFetch(`http://localhost:3005/api/patients/${id}/notes`);

	return (
		<>
			{error && (
				<Alert status="error">
					<AlertIcon />
					{error}
				</Alert>
			)}

			{notes && (
				<>
					{/* {JSON.stringify(notes)} */}
					{notes.map((note, i) => {
						return <Note content={note} key={i} error={error} />;
					})}
				</>
			)}
		</>
	);
};
