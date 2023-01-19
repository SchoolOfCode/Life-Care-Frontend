import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export const NewNoteForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center>
        <Button colorScheme="teal" size="md" onClick={onOpen}>
          Add New Note
        </Button>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input placeholder="Overview" size="md" />
              <Input placeholder="Incidents/Concerns" size="md" />
              <Input placeholder="Additional Information" size="md" />

              {/* needs sanitizing? */}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              mr="10px"
              colorScheme="teal"
              variant="outline"
              onClick={onClose}
            >
              Close
            </Button>
            <Button colorScheme="teal" mr={3}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

//   <form action="submit">
//   <h2>ADD NEW NOTE</h2>
//   <label>Brief overview of your visit:</label>
//   <input></input>
//   <label>Incidents / concerns?</label>
//   <input></input>
//   <label>Additional Information:</label>
//   <input></input>
// </form>
