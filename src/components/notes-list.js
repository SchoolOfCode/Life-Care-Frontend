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

// idk don't ask

// export const NotesList = () => {
//   const { id } = useParams();
//   const { data: notes, error } = useFetch(
//     `${process.env.REACT_APP_API_SERVER_URL}/api/patients/${id}/notes`
//   );
//   const { post, updateNote } = usePost();

//   return (
//     <>
//       {error && (
//         <Alert status="error">
//           <AlertIcon />
//           {error}
//         </Alert>
//       )}

//       {notes && (
//         <>
//           {notes.map((note, note_id) => {
//             return <Note note={note} key={note_id} error={error} />;
//           })}
//         </>
//       )}
//     </>
//   );
// };

// const CreateComment = (props) => {
//   const { post, onSubmit } = props;
//   const [comment, setComment] = useState(commentStr);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(post.id, comment);
//   };

//   return (...);
// };
