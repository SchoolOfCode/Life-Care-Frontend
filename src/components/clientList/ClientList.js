import React from "react";
import ClientButton from "../buttons/ClientButton";

export default function ClientList() {
	console.log("button rendered");
	return (
		<div>
			<ClientButton />
			<ClientButton />
			<ClientButton />
			<ClientButton />
		</div>
	);
}
