import React from "react";
import Background from"../assets/background.jpg";
import "../styles/pages/landingPage.css";


const LandingPage = () => {

  return (
    <>
      <h1
        onClick={() =>
          window.open("http://localhost:3000/home", "_self")
        }
      >
        <div
          style={{
            backgroundImage: `URL(${Background})`
          }}
          className="LandingPageDiv"
        >
          <h1 className="LandingPageHeading">BOTANIQUE</h1>
        </div>
      </h1>
    </>
  );
};

export default LandingPage;
