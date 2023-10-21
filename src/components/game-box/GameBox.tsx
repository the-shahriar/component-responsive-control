import React, { ReactNode } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

interface ViewportData {
  width: number;
  height: number;
  fontSize: number;
}

interface Props {
  children: ReactNode;
  viewPort: ViewportData;
}

export const calculateWidth = (viewPort: ViewportData) => {
  const minWidth = 0;
  const maxWidth = 640;

  let width: number;
  let aspectRatio: number;

  if (viewPort.width <= 320) {
    width = Math.max(Math.min(viewPort.width, maxWidth), minWidth);
  } else if (viewPort.width >= 640) {
    aspectRatio = 9 / 16;
    width = viewPort.height * aspectRatio;
  } else {
    width = viewPort.width;
  }

  return width;
};

export const calculateHeight = (viewPort: ViewportData) => {
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

export const GameBox = ({ viewPort, children }: Props) => {
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
