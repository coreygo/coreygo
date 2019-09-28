import React from 'react';
import styled from '@emotion/styled';

import logo from '../images/coreygo.svg';

const LogoContainer = styled.div`
  text-align: center;
  vertical-align: middle;
`;

const LogoWrapper = styled.img`
  width: 400px;
  height: 400px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoWrapper src={logo} alt="Coreygo" />
    </LogoContainer>
  );
};

export default Logo;
