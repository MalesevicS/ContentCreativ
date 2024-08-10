import React from 'react'
import "../styles/SocialMediaMarketing.css"
import socialImg from "../images/socialMedia.jpg"

const SocialMediaMarketing = () => {
  return (
    <div className='socialMedia_container'>
        <div className="socialSq">
            <div className="socialImg_container">
                <img className='socialImg' src={socialImg} alt="socialImg" />
            </div>
        <div className="socialMedia_text">
            <h2>
            Social Media Marketing
            </h2>
            <p>
            Social Media Marketing is the use of social media networks to promote their products or/and their services achieve a company’s marketing goals. The use of Social Media can generate new leads and create bonds end engagement with current customers.
            Social Media Marketing is also a strategic plan and only sharing a post every now and then is not enough. Content Creativ has the knowledge and training to achieve your business goals through Social Media Marketing.
            </p>
        </div>
        </div>
    </div>
  )
}

export default SocialMediaMarketing