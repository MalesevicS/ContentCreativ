import React from 'react'
import "../styles/HomeFirst.css";
import hPhoto from "../images/hPhoto.jpg"
import { useNavigate } from 'react-router-dom';

const HomeFirst = () => {
  const navigate = useNavigate();
  const takeMeToServices = () => {
    navigate('/reference#marketing-reference');
  }

  return (
    <div className='hfContainer'>
            <div className="hfLeft">
                <h2 className='hfHeader'>Digital Marketing That Delivers Results!</h2>
                <p className='hfParaf'>Build a strong digital presence that drives true growth online. Connect with your audience easily.</p>
                <button onClick={takeMeToServices} className='hfBtn'>Services</button>
            </div>
        <div className="hfRight">
            <div className='firstSq'></div>
            <div className='secondSq'></div>
            <img className='thridSq' src={hPhoto} alt="#" />
        </div>
    </div>
  )
}

export default HomeFirst