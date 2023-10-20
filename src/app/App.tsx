import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global';
import { GameBox } from '../components/game-box/GameBox';
import { CampaignBanner } from '../components/campaign-banner/CampaignBanner';
import { StartButton } from '../components/start-button/StartButton';

const calculateFontSize = (width: number, fontSize: number) => {
  let font_size: number;
  if (width <= 320) {
    font_size = fontSize - Math.ceil(16 / 9);
  } else {
    font_size = fontSize;
  }

  return font_size;
};

export const App = () => {
  const [viewPort, setViewPort] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
  });

  const handleResize = () => {
    setViewPort((prev) => ({
      ...prev,
      height: window.innerHeight,
      width: window.innerWidth,
      fontSize: calculateFontSize(window.innerWidth, 17),
    }));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <GameBox viewPort={viewPort}>
        <CampaignBanner fontSize={viewPort.fontSize} />
        <StartButton fontSize={viewPort.fontSize} />
      </GameBox>
    </>
  );
};
