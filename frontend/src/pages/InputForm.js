import React, { useState } from "react";

const InputForm = () => {
  const [details, setDetails] = useState({
    name: "",
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
    fetch("http://localhost:4000/api/v1/plants", {
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
