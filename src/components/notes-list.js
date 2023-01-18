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

  console.log(notes);

  return (
    <Container>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {notes && (
        <div>
          {notes.map((note) => {
            return (
              <div>
                <Note
                  content={note}
                  key={notes.note_id}
                  error={error}
                  isPending={isPending}
                />
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};
