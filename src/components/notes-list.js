import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const NotesList = () => {
	const { id } = useParams();
	const { data: notes, isPending, error } = useFetch(`http://localhost:3005/api/patients/${id}/notes`);

	return (
		<div className="patient-details">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{notes && JSON.stringify(notes)}
		</div>
	);
};

// export const NotesList = () => {
// 	return (
// 		<div>
// 			{notes.map((note, i) => {
// 				return <Note content={note} key={i} />;
// 			})}
// 		</div>
// 	);
// };
