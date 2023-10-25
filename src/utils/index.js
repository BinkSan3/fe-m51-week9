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

export const loginUser = async (username, password) => {
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

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export async function fetchUserData() {
  try {
    const response = await fetch("http://localhost:5001/users");

    const data = await response.json();
    return data.findUsers;
  } catch (error) {
    console.error("Error fetching user data", error);
  }
}
