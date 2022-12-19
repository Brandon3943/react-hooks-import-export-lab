import React from "react";
import * as userData from "../data/user.js";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home userName={userData.username} userCity={userData.city} />
      <About img={userData.image}/>
    </div>
  );
}

export default App;
