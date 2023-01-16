import { Link } from "react-router-dom";

export const NotFoundPage = () => {
	return (
		<div className="content-layout">
			<img src="https://i.pinimg.com/originals/bc/80/f2/bc80f2f4671fc690da0a456cfdbcd020.jpg" alt="page not found" />
			<Link to="dashboard">Return to Dashboard</Link>
		</div>
	);
};
