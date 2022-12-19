import React from "react";


function Home({userName, userCity}) {
  return (
    <div id="home">
      <h1>
        {userName} is a Web Developer from {userCity}
      </h1>
    </div>
  );
}

export default Home;