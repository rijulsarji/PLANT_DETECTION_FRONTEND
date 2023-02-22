import React from 'react'
import "../styles/pages/newResult.css"; 
function newResult() {
  return (
    <div className='Result'>
        <div className="circle"></div>
        <img className="photo" src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSBVq7CqIcTkVDLIFgK8idw0zaLD7PBy1A2XK1uJDIZA4l98s7yxLJiD1CgdQlbLQHVgi0_iDAaPrY9PEITDjEdR7GDngbFFbG1ahiHqPeq" alt="Italian Trulli" />
        <img className = "BackgroundImage" src = "../pngegg.png" />
        <div className='ResultHeading'>
            <div>
                <h1>YOUR PLANT IS NEEM</h1>
                <div className='ResultButtons'>
                    <button className='KnowMore'>KNOW MORE</button>
                    <button className='TryAgain'>TRY AGAIN</button>
                </div>
            </div>
        </div>
        <div className = 'ResultDiscription'>
            discription
        </div>
    </div>
  )
}

export default newResult