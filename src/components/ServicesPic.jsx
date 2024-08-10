import React from 'react'
import "../styles/ServicesPic.css"
import serviceImg from "../images/servicePic.jpg"

const ServicesPic = () => {
  return (
    <div className='servicePic_container'>
        <img className='service_Img' src={serviceImg} alt="serviceImg" />
        <div className='serviceImg_sq'></div>
    </div>
  )
}

export default ServicesPic