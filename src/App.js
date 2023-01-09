import "./App.css";
import Home from "./pages/Home.js";
import ProfileInfo from "./pages/ProfileInfo.js";
import { Routes, Route } from "react-router-dom";

export const App = () => {
	console.log(`
  SERVER_URL = ${process.env.REACT_APP_API_SERVER_URL} \n 
  AUTH0_DOMAIN = ${process.env.REACT_APP_AUTH0_DOMAIN} \n 
  AUTH0_CLIENT_ID = ${process.env.REACT_APP_AUTH0_CLIENT_ID} \n 
  AUTH0_CALLBACK_URL = ${process.env.REACT_APP_AUTH0_CALLBACK_URL}
  `);

	return (
		<Routes>
			<Route index element={<Home />} />
			{/* /profile should be a protected route!! */}
			<Route path="/profile" element={<ProfileInfo />} /> 
		</Routes>
	);
};

export default App;
