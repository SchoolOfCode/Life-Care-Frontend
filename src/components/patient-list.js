import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const PatientList = () => {
	// const dummyImgUrl = "https://media.istockphoto.com/id/157696530/photo/cranky-woman-making-faces-and-flipping-the-bird.jpg?s=612x612&w=0&k=20&c=y9_kVJuwctQYRpb5OBRvvrYqgR4o_asMKbgMy7CfxP8=";

	// const carer_id = 1;
	// const { data: patients, isPending, error } = useFetch(`http://localhost:3005/api/carers/${carer_id}/patients`);

	// return (
	// 	<div className="patients-list">
	// 		<h1>PatientList</h1>
	// 		{error && <div>{error}</div>}
	// 		{isPending && <div>Loading...</div>}
	// 		{patients && (
	// 			<div>
	// 				{patients.map((patient) => {
	// 					return (
	// 						<div className="patient-preview" key={patient.patient_id}>
	// 							<Link to={`/patient/${patient.patient_id}`}>
	// 								<img className="thumbnail" src={dummyImgUrl} alt="patient" />
	// 								{patient.patient_name}
	// 							</Link>
	// 						</div>
	// 					);
	// 				})}
	// 			</div>
	// 		)}
	// 	</div>
	// );
};
