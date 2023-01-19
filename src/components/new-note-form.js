import { useParams } from "react-router-dom";
import React, { useState } from "react";
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

  const [overviewValue, setOverview] = useState("");
  const [incidentValue, setIncident] = useState("");
  const [additionalValue, setAdditional] = useState("");
  const { id } = useParams();

  async function handleClick() {
    const newNote = {
      overview: overviewValue,
      incident: incidentValue,
      additional: additionalValue,
    };

    const response = await fetch(
      `http://localhost:3005/api/patients/${id}/notes`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      }
    );

    const result = await response.json();
    console.log(result);
  }

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
              <Input
                placeholder="Overview"
                size="md"
                onChange={(event) => setOverview(event.target.value)}
              />
              <Input
                placeholder="Incidents/Concerns"
                size="md"
                onChange={(event) => setIncident(event.target.value)}
              />
              <Input
                placeholder="Additional Information"
                size="md"
                onChange={(event) => setAdditional(event.target.value)}
              />

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
            <Button colorScheme="teal" mr={3} onClick={handleClick}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// const newNote = {
// 	patient_id: patient_id,
// 	carer_id: carer_id,
// 	content: /* overview */,
// 	incidents: /* incidents/concerns */ ,
// 	additional: /* additional information */ ,
// 	time_stamp: formatDateTime(),
// 	seen: false};

// const response = await fetch(`http://localhost:3005/api/patients/${id}/notes`, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(newNote),
// });
