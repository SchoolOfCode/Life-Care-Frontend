import React from "react";
import AddNewNote from "../components/buttons/AddNewNote";
import LogoutButton from "../components/buttons/LogoutButton";
import SubmitNotes from "../components/buttons/SubmitNotes";

export default function TasksNotes() {
	return (
		<div>
			<LogoutButton />
			<div>
				<AddNewNote />
				<h1>ADD NEW NOTE</h1>
				<p>Brief overview of your visit:</p>
				<input></input>
				<p>Incidents / concerns?</p>
				<input></input>
				<p>Additional Information:</p>
				<input></input>
				<SubmitNotes />
			</div>
			<h1>NOTES</h1>
			<div>
				<p>Carer:</p>
				<p>Date:</p>
				<p>Time:</p>
				<p>Brief overview of your visit:</p>
				<div>
					<p>overview</p>
				</div>
				<p>Incidents / concerns?</p>
				<div>
					<p>Incidents / concerns?</p>
				</div>
				<p>Additional Information:</p>
				<div>
					<p>Additional Information</p>
				</div>
			</div>
		</div>
	);
}
