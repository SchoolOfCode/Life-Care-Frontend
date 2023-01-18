import { Center, Container } from "@chakra-ui/react";
import { PatientList } from "../components/patient-list";
import useFetch from "../hooks/useFetch";

export default function Dashboard() {
	const carer_id = 1;
	let { data: carer, error, isPending } = useFetch(`http://localhost:3005/api/carers/${carer_id}`);

	return (
		<Container>
				{error && <div>{error}</div>}
				{isPending && <div>Loading...</div>}
				{carer && JSON.stringify(carer)}
			<Center>
				<PatientList />
			</Center>
		</Container>
	);
}
