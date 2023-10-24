import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="loginBox">
      <form id="loginForm">
        <h3>Login</h3>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
