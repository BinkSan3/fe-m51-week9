import React from "react";
import { useState } from "react";

import "./Login.css";

import { loginUser } from "../../../utils";

import { writeCookie } from "../../../common";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const loggedUser = await loginUser(username, password);
    console.log(loggedUser);
    await setUser(loggedUser);
    console.log("FROM THE LOG IN FUNCTION", user);
  };

  const logoutHandler = async (e) => {
    e.preventDefault();
    console.log("WE WANT TO LOG OUT");
    // writeCookie("jwt_token", 0);
    // this isnt working
  };

  if (!user) {
    return (
      <div className="loginBox">
        <form id="loginForm" onSubmit={submitHandler}>
          <h3>Login</h3>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => changeHandler(e, setUsername)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => changeHandler(e, setPassword)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
  return (
    <div>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  );
};

export default Login;
