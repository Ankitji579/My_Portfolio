import React, { useEffect, useState } from 'react';
import ParticlesBackground from './ParticlesBackground';
import GridBackground from './GridBackground';
import WaveBackground from './WaveBackground';
import PolygonBackground from './PolygonBackground';
import AuroraBackground from './AuroraBackground';
import './BackgroundSwitcher.css';

const BackgroundSwitcher = () => {
  const [theme, setTheme] = useState('theme-hero');

  useEffect(() => {
    if (document.body.className) {
      setTheme(document.body.className);
    }
    
    const observer = new MutationObserver(() => {
      setTheme(document.body.className);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="background-switcher">
      <div className={`bg-layer ${theme.includes('theme-hero') ? 'active' : ''}`}>
        <ParticlesBackground />
      </div>
      <div className={`bg-layer ${theme.includes('theme-experience') ? 'active' : ''}`}>
        <GridBackground />
      </div>
      <div className={`bg-layer ${theme.includes('theme-projects') ? 'active' : ''}`}>
        <WaveBackground />
      </div>
      <div className={`bg-layer ${theme.includes('theme-skills') ? 'active' : ''}`}>
        <PolygonBackground />
      </div>
      <div className={`bg-layer ${theme.includes('theme-education') ? 'active' : ''}`}>
        <AuroraBackground />
      </div>
      <div className={`bg-layer ${theme.includes('theme-contact') ? 'active' : ''}`}>
        {/* Contact can share Aurora or Particles, let's use Particles */}
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default BackgroundSwitcher;
