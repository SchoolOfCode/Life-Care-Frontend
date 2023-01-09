// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";

// export const LogoutButton = () => {
//   const { logout } = useAuth0();

//   const handleLogout = () => {
//     logout({
//       returnTo: window.location.origin,
//     });
//   };

//   return (
//     <button className="button__logout" onClick={handleLogout}>
//       Log Out
//     </button>
//   );
// };

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};
export default LogoutButton;
