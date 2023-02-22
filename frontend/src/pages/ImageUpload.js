import React from 'react'
import DragDrop from '../components/DragDrop';

function Image() {

  return (
    <div>
      <h1 style={{ marginTop: "100px", marginBottom: "50px", textAlign: "center", color: "#0b633a", fontFamily: "Segoe UI" }}>
        Upload your image and watch the magic! 🪄
      </h1>
      <DragDrop />
    </div>
  );
};

export default Image;