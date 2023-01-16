import { Link, useParams } from "react-router-dom";
import { PatientProfile } from "../components/patient-profile";
import useFetch from "../hooks/useFetch";

export const Patient = () => {
	// const { id } = useParams();
	// const { data: patient, isPending, error } = useFetch(`http://localhost:3005/api/patients/${id}`);

	// return (
	// 	<div className="patient-details">
	// 		<h1>sujfgbniujg</h1>
	// 		{error && <div>{error}</div>}
	// 		{isPending && <div>Loading...</div>}
	// 		{patient && JSON.stringify(patient)}
	// 		<PatientProfile />
	// 		<Link to={"notes"}>Tasks & Notes</Link>
	// 	</div>
	// );
};
