import React from 'react'
import "../styles/WebDesignAgency.css"
import wdaImg from "../images/graphic.jpg"

const WebDesignAgency = () => {
  return (
    <div className='WebDesignAgency_container'>
        <div className="wdaMain">
        <div className="wda_img">
            <img className='wdaPic' src={wdaImg} alt="wdaImg" />
        </div>
        <div className="wda_info">
            <h2>Web Design Agency</h2>
            <p>Creativity meets execution - <br />
                get custom print designs to <br />
                 enpower your business.</p>
            <button className='wdaBtn'>see more </button>
        </div>
        </div>
    </div>
  )
}

export default WebDesignAgency