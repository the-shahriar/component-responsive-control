import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    const { getByTestId, container } = render(<StartButton fontSize={17} />);

    const button = getByTestId('START_BUTTON');

    expect(button).toHaveStyle('background-color: rgb(52, 211, 153)');
    expect(button).toHaveStyle('color: rgb(2, 44, 34)');
    expect(button).toHaveStyle('position: absolute');
    expect(button).toHaveStyle('border: none');
    expect(button).toHaveStyle('display: flex');
    expect(button).toHaveStyle('align-items: center');
    expect(button).toHaveStyle('justify-content: center');
    expect(button).toHaveStyle('cursor: pointer');
    expect(button).toHaveStyle('transition: 0.3s ease-in-out');
    expect(button).toHaveStyle('font-weight: bold');
    expect(button).toHaveStyle(`top: ${gameConfig.startButton.offsetTop}`);
    expect(button).toHaveStyle(`border-radius: ${gameConfig.startButton.borderRadius}px`);
    expect(button).toHaveStyle(`height: ${gameConfig.startButton.height}px`);
    expect(button).toHaveStyle(`width: ${gameConfig.startButton.width}`);
    expect(button).toHaveStyle(`font-size: 17px`);
  });

  it('SHOULD Render StartButton with click event', () => {
    const { getByTestId } = render(<StartButton fontSize={17} />);

    const button = getByTestId('START_BUTTON');
    const alertSpy = jest.spyOn(window, 'alert');
    alertSpy.mockImplementation(() => {});

    const onClickMock = jest.fn();
    fireEvent.click(button);

    expect(onClickMock).toBeCalledTimes(0);
    expect(alertSpy).toHaveBeenCalledWith(
      'You will learn to develop JS games after you join with us! For now, best of luck!',
    );

    alertSpy.mockRestore();
  });
});
