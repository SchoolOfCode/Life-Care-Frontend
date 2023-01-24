import { useAuth0 } from "@auth0/auth0-react";
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
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export const NewNoteForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth0();
  const [overviewValue, setOverview] = useState("");
  const [incidentValue, setIncident] = useState("");
  const [additionalValue, setAdditional] = useState("");
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  // state for incidents & concerns 
  const [showIncident, setShowIncident] = useState(false);

  // state for additional information
  const [showAdditional, setAdditionalInfo] = useState(false);


  async function handleClick() {
    try {
      const newNote = {
        patient_id: id,
        carer_id: user.carer_id,
        content: overviewValue,
        incidents: incidentValue,
        additional: additionalValue,
      };
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/api/patients/${id}/notes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(newNote),
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  // function for incidents & concerns
  const handleToggle = (event) => {
    setShowIncident(event.target.checked);
  };

  // function for additional information
  const handleAdditonalToggle = (event) => {
    setAdditionalInfo(event.target.checked);
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
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="Incidents & concerns" mb="0">
                  Incidents & concerns
                </FormLabel>
                <Switch
                  id="incident_concern"
                  checked={showIncident}
                  onChange={handleToggle}
                  colorScheme='teal'
                />
              </FormControl>
              {showIncident && (
                <Input
                  placeholder="Incidents/Concerns"
                  size="md"
                  onChange={(event) => setIncident(event.target.value)}
                />
              )}
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="Additional information" mb="0">
                  Any additional information?
                </FormLabel>
                  <Switch id="additional_info"
                  checked={showAdditional}
                  onChange={handleAdditonalToggle}
                  colorScheme='teal'
                  ></Switch>
              </FormControl>{
                showAdditional && (
                  <Input
                  placeholder="Additional Information"
                  size="md"
                  onChange={(event) => setAdditionalInfo(event.target.value)}
                />
                )
              }
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

// const response = await fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/patients/${id}/notes`, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(newNote),
// });
