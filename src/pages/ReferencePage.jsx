import React, { useEffect } from 'react';
import ServicesPic from '../components/ServicesPic';
import SocialMediaMarketing from '../components/SocialMediaMarketing';
import VideoProdVoiceOver from '../components/VideoProdVoiceOver';
import JoinContent from '../components/JoinContent';
import WebDesignAgency from '../components/WebDesignAgency';
import WebDevSeo from '../components/WebDevSeo';

const ReferencePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div >
      <ServicesPic />
      <div id="marketing-reference">
        <SocialMediaMarketing />
      </div>
      <div id="video-prod">
        <VideoProdVoiceOver />
      </div>
      <div id="graphic-web">
       <WebDesignAgency />  
      </div>
      <div id="web-dev">
        <WebDevSeo />
      </div>
      <JoinContent />
    </div>
  );
}

export default ReferencePage;
