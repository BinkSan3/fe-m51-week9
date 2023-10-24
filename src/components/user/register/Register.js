import React from "react";

import "./Register.css";

const Register = () => {
  return (
    <div className="registerBox">
      <form id="registerForm">
        <h3>Register</h3>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
