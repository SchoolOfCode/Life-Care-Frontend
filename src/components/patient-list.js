import { Alert, AlertIcon, Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";

export const PatientList = () => {
	const { user } = useAuth0();
	const { data: patients, error } = useFetch(`${process.env.REACT_APP_API_SERVER_URL}/api/carers/${user.carer_id}/patients`);

	return (
		<Center mt={13}>
			{error && (
				<Alert status="error">
					<AlertIcon />
					{error}
				</Alert>
			)}

			<Flex direction={"column"}>
				<Heading mt={14} mb={6} fontSize={["xl", "xl", "2xl", "2xl"]}>
					Your Clients
				</Heading>
				{patients && (
					<Grid maxW={"90vw"} templateColumns="repeat(auto-fit, minmax(325px, 1fr))" gap={6}>
						{patients.map((patient) => {
							let dob = new Date(patient.dob).toLocaleDateString();
							return (
								<GridItem w="100%" key={patient.patient_id} boxShadow="xl" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
									<Image src={patient.avatar} alt={"client"} />
									<Flex>
										<Box w={"80%"} p="6" bg="white">
											<Box display="flex" align="baseline">
												<Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
													DOB: {dob}
												</Box>
											</Box>
											<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1} fontSize={['xl', 'xl', 'lg']}>
												{patient.first_name} {patient.last_name}
											</Box>
										</Box>
										<Spacer />
										<Flex gap={3} direction={"column"} grow={1} p="4" bg="white">
											{" "}
											<Link as={ReactRouterLink} to={`/patient/${patient.patient_id}`} style={{ textDecoration: "none" }}>
												<Button colorScheme="teal">Profile</Button>
											</Link>
											<Link as={ReactRouterLink} to={`/patient/${patient.patient_id}/notes`} style={{ textDecoration: "none" }}>
												<Button w={"100%"} colorScheme="teal">
													Notes
												</Button>
											</Link>
										</Flex>
									</Flex>
								</GridItem>
							);
						})}
					</Grid>
				)}
			</Flex>
		</Center>
	);
};
