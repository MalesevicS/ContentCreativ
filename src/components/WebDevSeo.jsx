import React from 'react'
import "../styles/WebDevSeo.css"
import seoImg from "../images/seo.jpg"

const WebDevSeo = () => {
    return (
        <div className='wds_container'>
            <div className="wdsMain">
            <div className="wds_img">
                <img className='wdsPic' src={seoImg} alt="wdsImg" />
            </div>
            <div className="wds_info">
                <h2>Website Development and SEO</h2>
                <p>Drive more traffic <br />
                with our website<br />
                design, and SEO optimization.</p>
                <button className='wdsBtn'>see more </button>
            </div>
            </div>
        </div>
    )
}

export default WebDevSeo