import { Alert, AlertIcon, Center, Container, Flex, Heading } from "@chakra-ui/react";
import { CarerInfo } from "../components/carer-info";
import { PatientList } from "../components/patient-list";
import useFetch from "../hooks/useFetch";

export function Dashboard() {
	const carer_id = 1;
	let { data: carer, error } = useFetch(`http://localhost:3005/api/carers/${carer_id}`);

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
						<Heading mt={14} fontSize={['md','md','lg','lg'] }>Your Clients:</Heading>
						<PatientList />
					</Flex>
				)}
			</Center>
		</Container>
	);
}
