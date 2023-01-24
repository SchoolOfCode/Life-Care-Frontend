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
  useToast
} from "@chakra-ui/react";

export const NewNoteForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth0();
  const [overviewValue, setOverview] = useState("");
  const [incidentValue, setIncident] = useState("No incident or concerns");
  const [additionalValue, setAdditional] = useState(
    "No additional information "
  );
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  // state for incidents & concerns
  const [showIncident, setShowIncident] = useState(false);

  // state for additional information
  const [showAdditional, setAdditionalInfo] = useState(false);
  const toast = useToast();

  async function handleClick() {
    try {
      const newNote = {
        patient_id: id,
        carer_id: user.carer_id,
        overview: overviewValue,
        incidents: incidentValue,
        additional: additionalValue,
        time_stamp: new Date(),
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
      toast({
        title: "Note added.",
        description: "Your note has been added.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error occurred while adding the note.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  // function for incidents & concerns
  const handleToggle = (event) => {
    setShowIncident(event.target.checked);
  };

  // function for additional information
  const handleAdditonalToggle = (event) => {
    setAdditionalInfo(event.target.checked);
  };

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
                  Any incidents/concerns?
                </FormLabel>
                <Switch
                  id="incident_concern"
                  checked={showIncident}
                  onChange={handleToggle}
                  colorScheme="teal"
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
                <Switch
                  id="additional_info"
                  checked={showAdditional}
                  onChange={handleAdditonalToggle}
                  colorScheme="teal"
                ></Switch>
              </FormControl>
              {showAdditional && (
                <Input
                  placeholder="Additional Information"
                  size="md"
                  onChange={(event) => setAdditional(event.target.value)}
                />
              )}

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
            <Button colorScheme="teal" mr={3} onClick={() => {handleClick(); onClose();}}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};