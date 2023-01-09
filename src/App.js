// import logo from './logo.svg';
import "./App.css";

export const App = () => {
	console.log(`
  SERVER_URL = ${process.env.REACT_APP_API_SERVER_URL} \n 
  SERVER_URL = ${process.env.REACT_APP_AUTH0_DOMAIN} \n 
  SERVER_URL = ${process.env.REACT_APP_AUTH0_CLIENT_ID} \n 
  SERVER_URL = ${process.env.REACT_APP_AUTH0_CALLBACK_URL}
  `);

	return <p>Hello, World!</p>;
};

export default App;
