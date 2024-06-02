import React, { useEffect } from 'react';
import MarketingReference from '../components/MarketingReference';
import WebDev from '../components/WebDev';
import GraphicAndWeb from '../components/GraphicAndWeb';
import VideoProd from '../components/VideoProd';

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
        <MarketingReference />
      </div>
      <div id="video-prod">
        <VideoProd />
      </div>
      <div id="graphic-web">
        <GraphicAndWeb />
      </div>
      <div id="web-dev">
        <WebDev />
      </div>
    </div>
  );
}

export default ReferencePage;
