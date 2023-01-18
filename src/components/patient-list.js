import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";

export const PatientList = () => {
	const carer_id = 1; //! This needs to be dynamic!
	const { data: patients, isPending, error } = useFetch(`http://localhost:3005/api/carers/${carer_id}/patients`);

	return (
		<Box mt={133}>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{patients && (
				<div p="10">
					{patients && JSON.stringify(patients)}
					{patients.map((patient) => {
						return (
							<Box key={patient.patient_id} boxShadow="xl" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
								<Image src={patient.avatar} alt={"client"} />
								<Flex>
									<Box w={"80%"} p="6" bg="white">
										<Box display="flex" align="baseline">
											<Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
												DOB: {patient.dob}
											</Box>
										</Box>
										<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1} fontSize="xl">
											{patient.first_name} {patient.last_name}
										</Box>
									</Box>
									<Spacer />
									<Flex gap={3} direction={"column"} grow={1} p="4" bg="white">
										{" "}
										<Button colorScheme="teal">Profile</Button>
										<Button colorScheme="teal">Notes</Button>
									</Flex>
								</Flex>
							</Box>
						);
					})}
				</div>
			)}
		</Box>
	);
};
