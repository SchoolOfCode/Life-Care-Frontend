import React from "react";

export default function ClientProfile(props) {
	return (
		<div>
			<img src={""} alt="Client Image" />
			<h1 className="client_name">name: {props.name}</h1>
			<button className="tasks_notes">Task/ Notes</button>
			<h2 className="client_information">Client Information</h2>
			<div className="contact_details">
				<ul>
					<li>Address: {props.address}</li>
					<li>DOB: {props.dob}</li>
					<li>Emergency Contact: {props.emergency_contact}</li>
				</ul>
			</div>
			<div className="overview_med">
				<li>Overview: {props.overview}</li>
				<li>Medical_History: {props.medical_history}</li>
			</div>
		</div>
	);
}
