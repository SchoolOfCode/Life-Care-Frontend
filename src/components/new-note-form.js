export const NewNoteForm = () => {
	return (
		<form action="submit">
			<h2>ADD NEW NOTE</h2>
			<label>Brief overview of your visit:</label>
			<input></input>
			<label>Incidents / concerns?</label>
			<input></input>
			<label>Additional Information:</label>
			<input></input>
		</form>
	);
};

// function BasicUsage() {
// 	const { isOpen, onOpen, onClose } = useDisclosure()
// 	return (
// 	  <>
// 		<Button onClick={onOpen}>Add New Note</Button>

// 		<Modal isOpen={isOpen} onClose={onClose}>
// 		  <ModalOverlay />
// 		  <ModalContent>
// 			<ModalHeader>Modal Title</ModalHeader>
// 			<ModalCloseButton />
// 			<ModalBody>
// 			  <Stack spacing={3}>
// 	<Input placeholder='medium size' size='md' />
// 	<Input placeholder='medium size' size='md' />
// 	<Input placeholder='medium size' size='md' />
//   </Stack>
// 			</ModalBody>

// 			<ModalFooter>
// 			  <Button colorScheme='blue' mr={3} onClick={onClose}>
// 				Close
// 			  </Button>
// 			  <Button variant='ghost'>Post</Button>
// 			</ModalFooter>
// 		  </ModalContent>
// 		</Modal>
// 	  </>
// 	)
//   }
