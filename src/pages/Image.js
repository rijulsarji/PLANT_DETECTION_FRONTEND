import React from 'react'
import axios from 'axios';

function Image() {
    const [userImage, setUserImage] = React.useState('')
    function handleImage(e){
      console.log(e.target.files)
      setUserImage(e.target.files[0])
    }
    async function handleSubmit(){
      const formData = new FormData()
      formData.append('file', userImage)
      console.log(formData)
      const a = await axios
        .post("http://54.248.184.136/submit", formData)
        .then((res) => {
          console.log(res);
        });
      console.log(a)

    }

      
  return (
    <div>
        <h1>asd</h1>
        <input type='file' name='file' accept="image/*" onChange={handleImage}/>
        <button onClick={handleSubmit}>submit</button>
        

    </div>
  )
};

export default Image;