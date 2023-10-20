import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div((props: { width: number; height: number }): CSSObject => {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: props.width,
    height: props.height,
    maxWidth: gameConfig.container.maxWidth,
    maxHeight: gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
  };
});
