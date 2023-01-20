import { Alert, AlertIcon, Center, Container, Flex, Heading } from "@chakra-ui/react";
import { CarerInfo } from "../components/carer-info";
import { PatientList } from "../components/patient-list";
import useFetch from "../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";

export function Dashboard() {
	const { user } = useAuth0();
	let { data: carer, error } = useFetch(`http://localhost:3005/api/carers/${user.carer_id}`);

	console.log(user.carer_id);

	return (
		<Container paddingBlockEnd={10}>
			<Center>
				{/* {carer && JSON.stringify(carer)} */}
				{error && (
					<Alert status="error">
						<AlertIcon />
						{error}
					</Alert>
				)}
				{carer && (
					<Flex direction={"column"} w={"90vw"}>
						<CarerInfo />
						<Heading mt={14} fontSize={["md", "md", "lg", "lg"]}>
							Your Clients:
						</Heading>
						<PatientList />
					</Flex>
				)}
			</Center>
		</Container>
	);
}
