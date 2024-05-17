import React from 'react';
import "../styles/AboutInfo.css";
import aboutImage from "../images/graphic.jpg";

const chooseData = [
    {
        icon:"ri-wifi-fill",
        title:"First working process",
        desc:"Our extensive experience and expertise ensure that we deliver tailored, effective marketing strategies for your unique needs."
    },
    {
        icon:"ri-team-line",
        title:"Dedicated team",
        desc:"Our team is fully dedicated to your success, working tirelessly to understand your business and create personalized, effective strategies. We are committed to exceeding your expectations and achieving outstanding results."
    },
    {
        icon:"ri-customer-service-line",
        title:"23/7 hours available",
        desc:"We are available 23/7, ensuring that we're always here to support your needs and address any concerns promptly. Our hardworking team is committed to delivering exceptional results and going the extra mile for your success."
    },
];

const AboutInfo = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6>Why choose us?</h6>
                        <h2>Specialists in boosting your business</h2>
                        <h2 className="highlight">financial challenges</h2>
                        <p className='description about__content-desc'>
                        We have consistently driven growth and success for our clients, reflected in increased sales and brand recognition.Personalized approach.We treat each client as unique, creating customized plans that align with your specific goals.Cutting-edge solutions: We stay ahead of industry trends, utilizing the latest tools and technologies for maximum impact.                       
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
                    <div className="about__img">
                        <img src={aboutImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutInfo;
