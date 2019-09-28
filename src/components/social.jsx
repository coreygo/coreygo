import React from 'react';
import styled from '@emotion/styled';

import BTCIcon from '../images/icons/btc.svg';
import PayPalIcon from '../images/icons/paypal.svg';
import TwitterIcon from '../images/icons/twitter-square.svg';
import YouTubeIcon from '../images/icons/youtube-square.svg';
import VimeoIcon from '../images/icons/vimeo-square.svg';
import LinkedInIcon from '../images/icons/linkedin.svg';
import GitHubIcon from '../images/icons/github-square.svg';
import EnvelopeIcon from '../images/icons/envelope.svg';
import PhoneIcon from '../images/icons/phone-square-alt.svg';

const SocialContainer = styled.div`
  text-align: center;
  vertical-align: middle;
`;

const BioWrapper = styled.h1`
  display: block;
  color: #424242;
  font-family: 'Dosis';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 24px;
`;

const IconWrapper = styled.svg`
  flex: none;
  width: 28px;
  height: 28px;
  fill: #424242;
  margin: auto 6px;
  background-color: transparent;
  transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.3);
    -moz-transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -o-transform: scale(1.3);
    -ms-transform: scale(1.3);
  }
`;

const Social = () => {
  return (
    <SocialContainer>
      <BioWrapper>One █ human being</BioWrapper>
      <a
        href="https://commerce.coinbase.com/checkout/acc79c66-968d-45b6-b1f5-bfe3988729dc"
        title="Coinbase"
        rel="noopener noreferrer"
      >
        <IconWrapper>
          <BTCIcon />
        </IconWrapper>
      </a>
      <a href="https://www.paypal.me/coreygo" title="PayPal" rel="noopener noreferrer">
        <IconWrapper>
          <PayPalIcon />
        </IconWrapper>
      </a>
      <a href="https://twitter.com/coreygouker" title="Twitter" rel="noopener noreferrer">
        <IconWrapper>
          <TwitterIcon />
        </IconWrapper>
      </a>
      <a href="https://www.youtube.com/user/coreygouker" title="YouTube" rel="noopener noreferrer">
        <IconWrapper>
          <YouTubeIcon />
        </IconWrapper>
      </a>
      <a href="https://vimeo.com/coreygo" title="Vimeo" rel="noopener noreferrer">
        <IconWrapper>
          <VimeoIcon />
        </IconWrapper>
      </a>
      <a href="https://linkedin.com/in/coreygo" title="LinkedIn" rel="noopener noreferrer">
        <IconWrapper>
          <LinkedInIcon />
        </IconWrapper>
      </a>
      <a href="https://github.com/coreygo/" title="GitHub" rel="noopener noreferrer">
        <IconWrapper>
          <GitHubIcon />
        </IconWrapper>
      </a>
      <a
        href="https://pgp.ocf.berkeley.edu/pks/lookup?search=0xF8189720240A11D1&fingerprint=on"
        title="Email and PGP public key"
        rel="noopener noreferrer"
      >
        <IconWrapper>
          <EnvelopeIcon />
        </IconWrapper>
      </a>
      <a href="tel:+12065885254" title="Phone" rel="noopener noreferrer">
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
      </a>
    </SocialContainer>
  );
};

export default Social;
