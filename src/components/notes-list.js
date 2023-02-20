import { Alert, AlertIcon } from "@chakra-ui/react";
import { Note } from "./note";

export const NotesList = ({ error, notes }) => {
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
					{notes.map((note, note_id) => {
						return <Note note={note} key={note_id} error={error} />;
					})}
				</>
			)}
		</>
	);
};