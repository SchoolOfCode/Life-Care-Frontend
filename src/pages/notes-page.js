import { Container } from "@chakra-ui/react";
import { NewNoteForm } from "../components/new-note-form";
import { NotesList } from "../components/notes-list";

export const Notes = () => {
  return (
    <Container>
      <NewNoteForm />
      <NotesList />
    </Container>
  );
};
