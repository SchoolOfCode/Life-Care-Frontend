import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const PatientList = () => {
	const dummyImgUrl = "https://media.istockphoto.com/id/157696530/photo/cranky-woman-making-faces-and-flipping-the-bird.jpg?s=612x612&w=0&k=20&c=y9_kVJuwctQYRpb5OBRvvrYqgR4o_asMKbgMy7CfxP8=";

	const carer_id = 1;
	const { data: patients, isPending, error } = useFetch(`http://localhost:3005/api/carers/${carer_id}/patients`);

	return (
		<>
			<Heading size="lg">Client List:</Heading>
			<div className="patients-list">
				{error && <div>{error}</div>}
				{isPending && <div>Loading...</div>}
				{patients && (
					<div>
						{patients.map((patient) => {
							return (
								<Link to={`/patient/${patient.patient_id}`}>
									<Card maxW="sm" key={patient.patient_id}>
										<CardBody>
											<Image
												src={dummyImgUrl}
												alt="client"
												borderRadius="lg"
											/>
											<Stack mt="6" spacing="3">
												<Heading size="md">{patient.patient_name}</Heading>
												<Text>She's a bit of a handful!</Text>
											</Stack>
										</CardBody>
										<Divider />
										<CardFooter>
											<ButtonGroup spacing="2">
												<Button variant="solid" colorScheme="teal">
													Profile
												</Button>
												<Button variant="ghost" colorScheme="teal">
													Notes
												</Button>
											</ButtonGroup>
										</CardFooter>
									</Card>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};
