import ImageDetection from "./ImageDetection";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsTrash } from "react-icons/bs";

const baseStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "80%",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#07b865",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#07b865",
  outline: "none",
  transition: "all .24s ease-in-out",
  fontFamily: "Segoe UI",
  fontSize: "24px",
  cursor: "pointer",
};

const focusedStyle = {
  backgroundColor: "#a0ffd2",
  color: "black",
};

const acceptStyle = {
  borderColor: "#0b633a",
  padding: "24px",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DragDrop() {
  const [file, setFile] = useState(null);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const buttonStyles = {
    backgroundColor: "#0b633a",
    color: "white",
    padding: "15px",
    borderRadius: "5px",
    borderWidth: "0px",
    fontSize: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
  };

  function removeButton(e) {
    e.preventDefault();
    acceptedFiles.pop();
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p style={{ backgroundColor: "transparent" }}>
          Drag & drop image of a plant 🪴, or click to select an image 📸
        </p>
        {acceptedFiles.map((file) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ backgroundColor: "transparent" }}>{file.path}</p>
            <BsTrash
              onClick={removeButton}
              color="red"
              size={24}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        ))}
      </div>
      <p id="errorMsg"></p>
      <button style={buttonStyles} onClick={() => ImageDetection(file)}>
        Submit Image
      </button>
    </div>
  );
}

export default DragDrop;
