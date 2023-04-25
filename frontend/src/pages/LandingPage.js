import React from "react";
import Background from"../assets/background.jpg";
import "../styles/pages/landingPage.css";


const LandingPage = () => {

  return (
    <>
      <h1
        onClick={() =>
          window.open("https://botanique.netlify.app/home", "_self")
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
