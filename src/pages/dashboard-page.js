import { Alert, AlertIcon, Center, Container, Flex, Heading } from "@chakra-ui/react";
import { CarerInfo } from "../components/carer-info";
import { PatientList } from "../components/patient-list";
import useFetch from "../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";

export function Dashboard() {
	const { user } = useAuth0();
	let { data: carer, error } = useFetch(`${process.env.REACT_APP_API_SERVER_URL}/api/carers/${user.carer_id}`);

	return (
		<Container paddingBlockEnd={10}>
			<Center>
				{error && (
					<Alert status="error">
						<AlertIcon />
						{error}
					</Alert>
				)}
				{carer && (
					<Flex direction={"column"} w={"90vw"}>
						<CarerInfo />
						<PatientList />
					</Flex>
				)}
			</Center>
		</Container>
	);
}
