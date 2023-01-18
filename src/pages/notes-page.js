import { Container } from "@chakra-ui/react";
import { Note } from "../components/note";
import { NotesList } from "../components/notes-list";

export const Notes = () => {
  return (
    <Container>
      <NotesList />
    </Container>
  );
};
