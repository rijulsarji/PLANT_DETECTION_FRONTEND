import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import icon from "../assets/loading-icon.png";
import "../styles/pages/aboutPage.css"
export const AboutPage = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://botanique-backend.onrender.com/api/v1/plants")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoad(false);
      });
  }, []);

  return (
    <div>
      {load ? (
        <div className="main-load">
          <img className="loading-icon" src={icon}  alt="Loading icon"/>
          {/* {icon} */}
        </div>
        
      ) : (
        <div>
          {data.map((id, index) => (
            <div key={id}>
              <Cards
                name={data[index].name}
                heading={data[index].heading}
                description={data[index].description}
                imageURL1={data[index].imageURL1}
                imageURL2={data[index].imageURL2}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AboutPage;
