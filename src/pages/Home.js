import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, Link } from "react-router-dom";
// import nav from "../images/nav.jpg"

const Home = () => {
  const { isAuthenticated } = useAuth0();

  //   let navbarImage;
  //   let thisText;

  //   isAuthenticated ? (navbarImage = nav) : (navbarImage = "https://i.imgur.com/pl5dEja.png");
  //   isAuthenticated ? (thisText = "👍 THIS 👍") : (thisText = "👎 NOT THIS 👎");

  return (
    <div className="App">
          <span id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </span>
      <header className="App-header">
      </header>
      <div className="body-content">
        <h1>Welcome.</h1>
      </div>
    </div>
  );
};

export default Home;
