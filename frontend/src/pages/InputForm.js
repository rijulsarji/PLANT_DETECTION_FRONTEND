import React, { useState } from "react";

const InputForm = () => {
  const [details, setDetails] = useState({
    name: "",
    heading: "",
    shortDescription: "",
    description: "",
    imageURL1: "",
    imageURL2: "",
  });

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
            placeholder="plantName"
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
          <input
            type="text"
            placeholder="image link 1"
            value={details.imageURL1}
            name="imageURL1"
            onChange={handleChange}
          />
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
