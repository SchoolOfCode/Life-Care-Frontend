import useFetch from "../hooks/useFetch";

export default function Dashboard () {
	const carer_id = 1;
	let data = useFetch(`http://localhost:3005/api/carers/${carer_id}`);

	
	console.log('log from Dashboard:', data);

	return (
			<div className="patient-details">
				<h1>Dashboard!</h1>
				{/* {error && <div>{error}</div>}
				{isPending && <div>Loading...</div>} */}
				{/* {JSON.stringify(data)} */}
			</div>
		);
	};