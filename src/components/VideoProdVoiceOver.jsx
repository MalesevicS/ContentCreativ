import React from 'react'
import "../styles/VideoProdVoiceOver.css"
import videoProdImg from "../images/videoprod.jpeg"

const VideoProdVoiceOver = () => {
    return (
        <div className='VideoProdVoiceOver_container'>
            <div className="videoSq">
                <div className="videoImg_container">
                    <img className='videoImg' src={videoProdImg} alt="socialImg" />
                </div>
            <div className="VideoProdVoiceOver_text">
                <h2>
                Video Production & Voice Over
                </h2>
                <p>
                Our in-house studio team are video creators first and foremost and include professional photographers, videographers and creatives.We engage and inspire your audience with clear and simple storytelling and a touch of creative flair.
                Save time & stress with full service end to end video production process. We do all the heavy lifting, so you don’t have to!<br/>
                VOICE OVER <br/>
                Our quality is the skill of the voice actor. Perfect enunciation, speak at an ideal pace, have a pleasing voice. and able to convey the feeling or emotions required by the script, using vocal variance and tone to keep the words interesting while also embodying the desired mood.
                </p>
            </div>
            </div>
        </div>
      )
}

export default VideoProdVoiceOver