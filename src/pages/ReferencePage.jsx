import React, { useEffect } from 'react';
import MarketingReference from '../components/MarketingReference';
import WebDev from '../components/WebDev';
import GraphicAndWeb from '../components/GraphicAndWeb';
import VideoProd from '../components/VideoProd';
import ServicesPic from '../components/ServicesPic';
import SocialMediaMarketing from '../components/SocialMediaMarketing';
import VideoProdVoiceOver from '../components/VideoProdVoiceOver';
import JoinContent from '../components/JoinContent';
import WebDesignAgency from '../components/WebDesignAgency';

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
    <div>
      <div id="marketing-reference">
       <ServicesPic />
      </div>
      <div id="video-prod">
        <SocialMediaMarketing />
      </div>
      <div id="graphic-web">
        <VideoProdVoiceOver />
      </div>
      <div id="web-dev">
        <WebDesignAgency />
      </div>
      <JoinContent />
    </div>
  );
}

export default ReferencePage;
