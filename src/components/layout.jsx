import React from 'react';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  box-shadow: inset 0 0 160px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            margin: 0 auto;
            padding: 0 auto;
            overflow-y: auto;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue',
              Arial, sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          body {
            margin: 0 auto !important;
            padding: 0 auto !important;
          }
          @import '/typeface-dosis/index.css';
          *,
          *::before,
          *::after {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
        `}
      />
      <Container>{children}</Container>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
