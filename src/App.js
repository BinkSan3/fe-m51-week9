import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/cards/cardContainer/CardContainer";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import UserContainer from "./components/user/userContainer/UserContainer";

import { fetchUserData } from "./utils";
import { getTokenFromCookie } from "./common";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({
          username: null,
          email: null,
          token: null,
        });
      } else {
        loginWithToken(token, setUser);
      }
    }
  }, []);

  const loginWithToken = async (token, setUser) => {
    const persistentUser = await authCheck(token);
    console.log("app.js persistentuser: ", persistentUser);
    await setUser(persistentUser);
  };

  // useEffect(() => {
  //   async function getAllUsers() {
  //     const data = await fetchUserData();
  //     await setUsers(data);
  //     console.log(data);
  //   }
  //   getAllUsers();
  // }, []);

  //login works but what is it supposed to do?
  //maybe not display the login component any more and dispay welcome back and the username

  // const handleLogin = async (e, setter, state) => {
  //   e.preventDefault();
  //bring in the login fetch data somehow
  //or just simply do the rederings in the log in
  //   console.log(data);
  //   await setUser(data);
  // };

  return (
    <div className="App">
      <Header />
      <CardContainer users={users} />
      <UserContainer user={user} setUser={setUser} setUsers={setUsers} />
      {/* <>{user ? <p>{user.userName} is logged in</p> : <p>not logged in</p>}</> */}
      <Footer />
    </div>
  );
}

export default App;
