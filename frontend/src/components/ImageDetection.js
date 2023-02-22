import axios from "axios";

const ImageDetection = async function handleSubmit(userImage) {
  const formData = new FormData();
  formData.append("file", userImage);

  function redirect(link) {
  window.location.href = `/plants/${link}`
  }
  await axios
    .post("http://54.248.184.136/submit", formData)
    .then((res) => {
      redirect(res.data.a);
    })
    .catch(err => {
      if(err.code === "ERR_BAD_REQUEST") {
        document.getElementById("errorMsg").innerHTML = "Please upload image";
      }
    })
};

export default ImageDetection;
