import { Alert, AlertIcon } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Note } from "./note";

export const NotesList = () => {
  const { id } = useParams();
  const { data: notes, error } = useFetch(
    `http://localhost:3005/api/patients/${id}/notes`
  );
  console.log(notes);
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
            return <Note content={note} key={note_id} error={error} />;
          })}
        </>
      )}
    </>
  );
};
