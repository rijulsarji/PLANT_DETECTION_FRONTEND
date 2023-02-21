import React from 'react'

const LandingPage = () => {

  return (
    <div>
      <h1
        onClick={() =>
          window.open("https://botanique.netlify.app/home", "_self")
        }
      >
        LandingPage
      </h1>
    </div>
  );
}

export default LandingPage;