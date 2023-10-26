import { getTokenFromCookie, writeCookie } from "../common";

export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`http://localhost:5001/users`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
      }),
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password, setUser) => {
  try {
    const response = await fetch(`http://localhost:5001/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    });

    const data = await response.json();
    writeCookie("jwt_token", data.user.token, 7);
    console.log("hello from login user in utils", data.user);
    return data.user;
  } catch (error) {
    console.log(error);
  }
};

// export async function fetchUserData() {
//   try {
//     const response = await fetch("http://localhost:5001/users");

//     const data = await response.json();
//     return data.findUsers;
//   } catch (error) {
//     console.error("Error fetching user data", error);
//   }
// }
//my first protected fetch request

export const getAllUsers = async () => {
  try {
    const token = getTokenFromCookie("jwt_token");

    const response = await fetch("http://localhost:5001/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.json();

    return data.findUsers;
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwt) => {
  try {
    const response = await fetch("http://localhost:5001:users/authCheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    const data = await response.json();
    console.log("authCheck utils data", data);
    data.user.token = jwt;
    return data.user;
  } catch (error) {
    console.log(error);
  }
};
