export const Note = ({ content }) => {
	return (
		<div>
			<div>
				<p>Carer: {content.carer}</p>
				<p>Date: {content.date}</p>
				<p>Time: {content.time}</p>
				<p>Overview:</p>
				<p>Incident(s):</p>
				<div>
					<p>{content.incident}</p>
				</div>
				<p>Additional(s):</p>
				<div>
					<p>{content.additional}</p>
				</div>
			</div>
		</div>
	);
};
