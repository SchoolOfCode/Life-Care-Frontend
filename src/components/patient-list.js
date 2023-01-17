import { Badge, Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
// import { Navigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const PatientList = () => {
	const dummyImgUrl = "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";

	const carer_id = 1;
	const { data: patients, isPending, error } = useFetch(`http://localhost:3005/api/carers/${carer_id}/patients`);

	// const handleClick = (patient) => {
	// 	Navigate({
	// 		returnTo: `/patient/${patient.patient_id}`,
	// 	});
	// };

	return (
		<Box mt={133}>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{patients && (
				<div p="10">
					{patients.map((patient) => {
						return (
							<Box key={patient.patient_id} boxShadow="xl" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
								<Image src={dummyImgUrl} alt={"client"} />
								<Flex>
									<Box w={"80%"} p="6" bg="white">
										<Box display="flex" align="baseline">
											<Badge borderRadius="sm" px="2" colorScheme="teal">
												New
											</Badge>
											<Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
												age 72
											</Box>
										</Box>
										<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1} fontSize="xl">
											{patient.patient_name}
										</Box>
										<Box>Female</Box>
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
