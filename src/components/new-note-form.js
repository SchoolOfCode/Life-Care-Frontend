import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { BsMic } from "react-icons/bs";

import {
	Button,
	Center,
	Input,
	Icon,
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
	useToast,
	Alert,
	AlertIcon,
	Box,
	FormHelperText,
	FormErrorMessage,
} from "@chakra-ui/react";

export const NewNoteForm = ({ handleNewNote }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user } = useAuth0();
	const { id } = useParams();
	const { getAccessTokenSilently } = useAuth0();
	const toast = useToast();

	const [overviewValue, setOverviewValue] = useState("");
	const [incidentValue, setIncidentValue] = useState("No incident or concerns");
	const [additionalValue, setAdditionalValue] = useState("No additional information ");
	const [showIncident, setShowIncident] = useState(false);
	const [showAdditional, setShowAdditional] = useState(false);

	const isOverviewError = overviewValue === "";
	const isIncidentError = incidentValue === "";
	const isAdditionalError = additionalValue === "";

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
			const response = await fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/patients/${id}/notes`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(newNote),
			});

			const result = await response.json();

			handleNewNote(result.payload);
			toast({
				title: "Note added.",
				description: "Your note has been added.",
				status: "success",
				duration: 3000,
				isClosable: true,
				position: "top-right",
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Error occurred while adding the note.",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	}

	// function for incidents & concerns
	const handleToggle = (event) => {
		setShowIncident(event.target.checked);
		setIncidentValue("");
	};

	// function for additional information
	const handleAdditonalToggle = (event) => {
		setShowAdditional(event.target.checked);
		setAdditionalValue("");
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
					<ModalHeader pb={4}>Add New Note</ModalHeader>
					<Alert mb={4} status="info" textAlign={"center"} fontSize={"small"}>
						<AlertIcon m={"auto"} />
						<Box w={"100%"}>
							Using a mobile device? <br />
							Use your microphone (<Icon as={BsMic} display={"inline"} />) to dictate notes fast!
						</Box>
					</Alert>
					<ModalCloseButton />
					<ModalBody>
						<Stack spacing={3}>
							{/* Overview Input */}
							<FormControl isRequired isInvalid={isOverviewError}>
								<FormLabel htmlFor="Overview">Overview</FormLabel>

								<Input value={overviewValue} placeholder="Enter a message" size="md" onChange={(event) => setOverviewValue(event.target.value)} />
								{!isOverviewError ? <FormHelperText></FormHelperText> : <FormErrorMessage>This field is required.</FormErrorMessage>}
							</FormControl>

							{/* Incidents & concerns */}
							<FormControl display="flex" alignItems="center">
								<FormLabel htmlFor="Incidents & concerns" mb="0">
									Any incidents/concerns?
								</FormLabel>
								<Switch id="incident_concern" checked={showIncident} onChange={handleToggle} colorScheme="teal" />
							</FormControl>

							{showIncident && (
								<FormControl isRequired isInvalid={isIncidentError}>
									<Input value={incidentValue} placeholder="Enter a message" size="md" onChange={(event) => setIncidentValue(event.target.value)} />
									{!isIncidentError ? <FormHelperText></FormHelperText> : <FormErrorMessage>This field is required.</FormErrorMessage>}
								</FormControl>
							)}

							{/* Additional information */}
							<FormControl display="flex" alignItems="center">
								<FormLabel htmlFor="Additional information" mb="0">
									Any additional information?
								</FormLabel>
								<Switch id="additional_info" checked={showAdditional} onChange={handleAdditonalToggle} colorScheme="teal"></Switch>
							</FormControl>

							{showAdditional && (
								<FormControl isRequired isInvalid={isAdditionalError}>
									<Input value={additionalValue} placeholder="Enter a message" size="md" onChange={(event) => setAdditionalValue(event.target.value)} />
									{!isAdditionalError ? <FormHelperText></FormHelperText> : <FormErrorMessage>This field is required.</FormErrorMessage>}
								</FormControl>
							)}
						</Stack>
					</ModalBody>

					<ModalFooter>
						<Button mr="10px" colorScheme="teal" variant="outline" onClick={onClose}>
							Close
						</Button>

						{isOverviewError || isIncidentError || isAdditionalError ? (
							<Button mr={3} disabled={true} style={{ cursor: "not-allowed" }}>
								Create Note
							</Button>
						) : (
							<Button
								colorScheme="teal"
								mr={3}
								onClick={() => {
									handleClick();
									onClose();
								}}
							>
								Create Note
							</Button>
						)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
