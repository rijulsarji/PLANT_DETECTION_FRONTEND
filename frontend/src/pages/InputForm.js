import React, { useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";

const InputForm = () => {
  // const cld = new Cloudinary({
  //   cloud: {
  //     apiKey: "831139479595482",
  //     apiSecret: "aj9XUPc5vsB1qQ9ftGTF7xxjLcw",
  //     cloudName: "dthxfusa6",
  //   },
  //   url: "cloudinary://831139479595482:aj9XUPc5vsB1qQ9ftGTF7xxjLcw@dthxfusa6",
  // });

  const [details, setDetails] = useState({
    name: "",
    heading: "",
    shortDescription: "",
    description: "",
    imageURL1: "",
    imageURL2: "",
  });

  const [smallImg, setSmallImg] = useState();

  const submitImg = () => {
    const data = new FormData();
    data.append("file", smallImg);
    data.append("upload_preset", "plant-upload");
    data.append("cloud_name", "dthxfusa6");
    fetch("https://api.cloudinary.com/v1_1/dthxfusa6/upload", {
      method: "POST",
      body: data
    }).then(response => console.log(response)).catch(err => console.log(err))
  };

  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoad(true);
    fetch("https://botanique-backend.onrender.com/api/v1/plants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then(() => setLoad(false))
      .then(() => {
        setDetails({
          ...details,
          name: "",
          heading: "",
          shortDescription: "",
          description: "",
          imageURL1: "",
          imageURL2: "",
        });
      });
  };

  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="plant name"
            value={details.name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="heading"
            value={details.heading}
            name="heading"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="short description"
            value={details.shortDescription}
            name="shortDescription"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description"
            value={details.description}
            name="description"
            onChange={handleChange}
          />
          <input type="file" onChange={(e) => setSmallImg(e.target.files[0])} />
          <button type="button" onClick={submitImg}>Upload small image</button>
          <input
            type="text"
            placeholder="image link 2"
            value={details.imageURL2}
            name="imageURL2"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default InputForm;
