import "./App.css";
import CardContainer from "./components/cards/cardContainer/CardContainer";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import UserContainer from "./components/user/userContainer/UserContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <UserContainer />
      <Footer />
    </div>
  );
}

export default App;
