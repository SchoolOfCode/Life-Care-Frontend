import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientProfile(props) {
	const navigate = useNavigate();

	const [isButtonClicked, setIsButtonClicked] = useState(false);

	const handleClick = () => {
		if (!isButtonClicked) {
			setIsButtonClicked(true);
			navigate("/tasks-notes");
		}
	};

	return (
		<div>
			<img src={"https://tse2.mm.bing.net/th?id=OIP.1Qm-1_dXEDPTmWZIbigdWgHaEw"} alt="Client" />
			<h1 className="client_name">name: {props.name}</h1>
			<button onClick={handleClick} className="tasks_notes">
				Task/Notes
			</button>
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
