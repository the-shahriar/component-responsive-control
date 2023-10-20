import React, { ReactNode, useEffect, useState } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

interface Props {
  children: ReactNode;
}

interface ViewportData {
  width: number;
  height: number;
}

const calculateWidth = (viewPort: ViewportData) => {
  const minWidth = 320;
  const maxWidth = 640;

  let width: number;
  let aspectRatio: number;

  if (viewPort.width <= 320) {
    width = Math.max(Math.min(viewPort.width, maxWidth), minWidth);
  } else if (viewPort.width >= 640) {
    aspectRatio = 9 / 16;
    width = Math.ceil(viewPort.height * aspectRatio);
  } else {
    width = viewPort.width;
  }

  return width;
};

const calculateHeight = (viewPort: ViewportData) => {
  const width = calculateWidth(viewPort);
  let aspectRatio: number;
  let height: number;

  if (width <= 320) {
    aspectRatio = 16 / 9;
    height = Math.ceil(width * aspectRatio);
  } else {
    height = viewPort.height;
  }

  return height;
};

export const GameBox = ({ children }: Props) => {
  const [viewPort, setViewPort] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setViewPort((prev) => ({ ...prev, height: window.innerHeight, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContainerStyled
      data-testid={TestElement.GAME_BOX}
      width={calculateWidth(viewPort)}
      height={calculateHeight(viewPort)}
    >
      {children}
    </ContainerStyled>
  );
};
