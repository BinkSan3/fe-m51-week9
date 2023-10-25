import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/cards/cardContainer/CardContainer";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import UserContainer from "./components/user/userContainer/UserContainer";

import { fetchUserData } from "./utils";

function App() {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState();

  useEffect(() => {
    async function getAllUsers() {
      const data = await fetchUserData();
      await setUsers(data);
      console.log(data);
    }
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <CardContainer users={users} />
      <UserContainer users={users} />
      <Footer />
    </div>
  );
}

export default App;
