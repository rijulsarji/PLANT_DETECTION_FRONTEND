import React, { Fragment, useEffect, useState } from 'react'
import "../styles/pages/newResult.css"; 
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function NewResult() {
    const navigate = useNavigate();
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [plant, setPlant] = useState(true)
    useEffect(() => {
        // fetching using axios
        const getData = async () => {
            const { data } = await axios.get(`https://botanique-backend.onrender.com/api/v1/plants/${id}`);
            setPlant(data);
            setLoading(false);
            console.log(data)

          };
          getData()
      }, []);
  return (
    <Fragment>
        {loading ? (
            <h1>loading</h1>
        ) :
        (
        <div className='Result'>
        <div className="circle"></div>
        <img className="photo" src= {plant.imageURL2} />
        <img className = "BackgroundImage" src = "../pngegg.png" />
        <div className='ResultHeading'>
            <div>
                <h1>Your Plant is {plant.heading}</h1>
                <div className='ResultButtons'>
                    <a href = "#container"><button className='KnowMore' >KNOW MORE</button></a>
                    <button className='TryAgain' onClick = {() => {navigate("/home")}}>TRY AGAIN</button>
                </div>
            </div>
        </div>
        <img className="circle2" src={plant.imageURL1} alt="Italian Trulli" />
        <div className = 'ResultDiscription'>
            
            <div className='discriptionBlock'>
                <div>
                    <h1 id = 'container'>About plant</h1>
                    <p>{plant.description}</p>
                </div>
            </div>
            
        </div>
    </div>
        )}
    </Fragment>





  )
}

export default NewResult