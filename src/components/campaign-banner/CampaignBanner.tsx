import React from 'react';
import { BannerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

interface Props {
  fontSize: number;
}

export const CampaignBanner = ({ fontSize }: Props) => {
  return (
    <BannerStyled data-testid={TestElement.CAMPAIGN_BANNER} fontSize={fontSize}>
      Score 200 points and get 10% discount on your next mobile Recharge!
    </BannerStyled>
  );
};
