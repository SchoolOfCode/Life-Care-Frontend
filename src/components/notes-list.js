import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Container } from "@chakra-ui/react";
import { Note } from "./note";

export const NotesList = () => {
  const { id } = useParams();
  const {
    data: notes,
    isPending,
    error,
  } = useFetch(`http://localhost:3005/api/patients/${id}/notes`);

  return (
    <Container>
      <Note />
    </Container>
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
