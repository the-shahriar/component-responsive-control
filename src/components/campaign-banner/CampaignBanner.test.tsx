import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const { getByTestId } = render(<CampaignBanner fontSize={17} />);

    const banner = getByTestId('CAMPAIGN_BANNER');
    expect(banner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
      top: gameConfig.campaignBanner.offsetTop,
      borderRadius: `${gameConfig.campaignBanner.borderRadius}px`,
      width: gameConfig.campaignBanner.width,
      padding: `${gameConfig.campaignBanner.padding}px`,
      backgroundColor: gameConfig.campaignBanner.background,
      color: gameConfig.campaignBanner.textColor,
      fontSize: 17 | 15,
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    global.innerWidth = 250;
    const { getByTestId } = render(<CampaignBanner fontSize={15} />);

    const banner = getByTestId('CAMPAIGN_BANNER');
    expect(banner).toHaveStyle('font-size: 15px');
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    global.innerHeight = 600;

    const { getByTestId } = render(<CampaignBanner fontSize={17} />);

    const banner = getByTestId('CAMPAIGN_BANNER');
    expect(banner).toHaveStyle('font-size: 17px');
  });
});
