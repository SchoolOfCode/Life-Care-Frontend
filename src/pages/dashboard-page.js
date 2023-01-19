import { Alert, AlertIcon, Center, Container } from "@chakra-ui/react";
import { PatientList } from "../components/patient-list";
import useFetch from "../hooks/useFetch";

export function Dashboard() {
	const carer_id = 1;
	let { data: carer, error } = useFetch(`http://localhost:3005/api/carers/${carer_id}`);

	return (
		<Container>
			{/* {carer && JSON.stringify(carer)} */}
			{error && (
				<Alert status="error">
					<AlertIcon />
					{error}
				</Alert>
			)}
			{carer && (
				<Center>
					<PatientList />
				</Center>
			)}
		</Container>
	);
}
