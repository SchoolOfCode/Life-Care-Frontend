import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Avatar, Wrap, WrapItem, Heading, Card, Container, Center, CardBody } from "@chakra-ui/react";

export const PatientInfo = () => {
	const dummyImgUrl = "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";

	const { id } = useParams();
	const { data: patient, isPending, error } = useFetch(`http://localhost:3005/api/patients/${id}`);

	console.log();

	return (
		<Container>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{patient && (
        <>
          {JSON.stringify(patient)}
					<Center m="20px">
						<Wrap>
							<WrapItem>
								<Avatar size="2xl" src={dummyImgUrl} />
							</WrapItem>
						</Wrap>
					</Center>
					<Center m="20px">
						<Heading>{patient.patient_name}</Heading>
					</Center>
					<Card>
						<CardBody>
							Patient number: {patient.patient_number}
							<br></br>
							Date of birth: {patient.patient_dob}
						</CardBody>
					</Card>
				</>
			)}
		</Container>
	);
};
