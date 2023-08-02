import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

  const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();
  
  const nameStyle = {
    width:"120px",
    fontSize: "15px",
    fontWeight: "normal",
    color: "white",
    marginBottom: "10px",
    display:"flex",
    borderRadius: "5px",
    alignItems: "center",
    flexDirection: "column",
  };
  // const containerStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   minHeight: "100vh",
  // };


  return (
    <div >

     {isAuthenticated && <p style={nameStyle}>{user.name}</p>}

      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}  >Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()} > Log In </button>
      )}
    </div>
  );
};

export default LoginButton;
