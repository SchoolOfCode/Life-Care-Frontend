import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const PatientProfile = () => {
	const { id } = useParams();
	const { data, isPending, error } = useFetch(`http://localhost:3005/api/patients/${id}`);


	return (
		<div className="patient-details">
			<h1>dlfkjs</h1>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{data && JSON.stringify(data)}
		</div>
	);
};
