import React from 'react'

const LandingPage = () => {

  return (
    <div>
      <h1 onClick={() => window.open("http://localhost:3000/home", "_self")}>
        LandingPage
      </h1>
    </div>
  );
}

export default LandingPage;