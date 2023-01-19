import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Avatar, Wrap, WrapItem, Heading, Card, Center, CardBody, AlertIcon, Alert } from "@chakra-ui/react";
import { TasksNotes } from "./buttons/tasks-notes-button";

export const PatientInfo = () => {
	const { id } = useParams();
	const { data: patient, error } = useFetch(`http://localhost:3005/api/patients/${id}`);

	return (
		<>
			{error && (
				<Alert status="error">
					<AlertIcon />
					{error}
				</Alert>
			)}

			{patient && (
				<>
					<Center m="20px">
						<Wrap>
							<WrapItem>
								<Avatar size="2xl" src={patient.avatar} />
							</WrapItem>
						</Wrap>
					</Center>
					<Center m="10px">
						<Heading>{`${patient.first_name} ${patient.last_name}`}</Heading>
					</Center>
					<Center>
						<TasksNotes />
					</Center>
					<Card>
						<CardBody>
							<strong>Address: </strong>
							{patient.address}
							<br></br>
							<strong>Date of birth: </strong>
							{patient.dob}
							<br></br>
							<strong>Patient number: </strong>
							{patient.number}
						</CardBody>
					</Card>
				</>
			)}
		</>
	);
};
