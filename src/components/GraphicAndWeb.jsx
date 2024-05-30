import React from 'react';
import "../styles/GraphicAndWeb.css";
import graphicWebImage from "../images/VideoEdit.jpg";
import AboutPhoto from './AboutPhoto';
import ServicesSlider from './ServicesSlider';

const chooseData = [
    {
        icon:"ri-pencil-line",
        title:"Creative Design",
        desc:"Our team of creative designers brings your vision to life with innovative and eye-catching graphic and web designs."
    },
    {
        icon:"ri-code-line",
        title:"Responsive Development",
        desc:"We specialize in responsive web development, ensuring your website looks stunning and functions flawlessly across all devices."
    },
    {
        icon:"ri-palette-line",
        title:"Custom Solutions",
        desc:"We offer custom solutions tailored to your unique needs, providing personalized design and development services that set your brand apart."
    },
];

const GraphicAndWebInfo = () => {
    return (
        <section id='graphicAndWeb'>
            <div className="container_Graph">
                <div className="graphicAndWeb__wrapper">
                    <div className="graphicAndWeb__content">
                        <h6>Why choose us?</h6>
                        <h2>Specialists in Graphic & Web Design</h2>
                        <h2 className="highlight">creativity meets functionality</h2>
                        <p className='description graphicAndWeb__content-desc'>
                        Our expert team combines creativity with technical expertise to deliver stunning graphic and web designs that elevate your brand and captivate your audience.                       
                        </p>
                        <div>
                            {chooseData.map((item, index) => (
                                <div className="choose__us-item" key={index}>
                                    <span className="choose__us-icon">
                                        <i className={item.icon}></i>
                                    </span>
                                    <div>
                                        <h4 className="choose__us-title">{item.title}</h4>
                                        <p className="description">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default GraphicAndWebInfo;
