import React from "react";
import { useState } from "react";

import "./Register.css";

import { registerUser } from "../../../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = await registerUser(username, email, password);
  };

  return (
    <div className="registerBox">
      <form id="registerForm" onSubmit={submitHandler}>
        <h3>Register</h3>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => changeHandler(e, setUsername)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => changeHandler(e, setEmail)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
