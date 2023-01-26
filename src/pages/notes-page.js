import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { NewNoteForm } from "../components/new-note-form";
import { NotesList } from "../components/notes-list";
import useFetch from "../hooks/useFetch";

export const Notes = () => {

  const { id } = useParams();
  const { user } = useAuth0();
  const { data: notes, error, setData } = useFetch(
    `${process.env.REACT_APP_API_SERVER_URL}/api/patients/${id}/notes`
  );


  function handleNewNote(newNote) {
    const [firstName, lastName] = user.name.split(" ");
    const note = {
      ...newNote, first_name: firstName, last_name: lastName
    }
    setData([note, ...notes]);
  }


  return (
    <Container paddingBlockEnd={10}>
      <NewNoteForm handleNewNote={handleNewNote} />
      <NotesList notes={notes} error={error} />
    </Container>
  );
};
