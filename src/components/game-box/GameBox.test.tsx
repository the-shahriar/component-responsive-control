import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    global.innerWidth = 1000;
    global.innerHeight = 1000;

    const viewPort = {
      width: 1000,
      height: 1000,
      fontSize: 16,
    };

    const { getByTestId } = render(<GameBox viewPort={viewPort}>Children</GameBox>);

    const gameBox = getByTestId('GAME_BOX');
    expect(gameBox).toHaveStyle('max-width: 562.5px');
    expect(gameBox).toHaveStyle('max-height: 1000px');
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    global.innerWidth = 300;
    global.innerHeight = 1000;

    const viewPort = {
      width: 300,
      height: 1000,
      fontSize: 16,
    };

    const { getByTestId } = render(<GameBox viewPort={viewPort}>Children</GameBox>);

    const gameBox = getByTestId('GAME_BOX');
    expect(gameBox).toHaveStyle('max-width: 300px');
    expect(gameBox).toHaveStyle('max-height: 534px');
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    global.innerWidth = 1000;
    global.innerHeight = 600;

    const viewPort = {
      width: 1000,
      height: 600,
      fontSize: 16,
    };

    const { getByTestId } = render(<GameBox viewPort={viewPort}>Children</GameBox>);

    const gameBox = getByTestId('GAME_BOX');
    expect(gameBox).toHaveStyle('max-width: 337.5px');
    expect(gameBox).toHaveStyle('max-height: 600px');
  });
});
