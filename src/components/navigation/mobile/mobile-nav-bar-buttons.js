import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";

export const MobileNavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__buttons">
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
      <a href="dashboard">Home</a>
    </div>
  );
};
