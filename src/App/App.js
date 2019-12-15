import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { APIProvider } from '../api/APIProvider';
import { Search } from '../search/Search';
import {
  CHILDREN_SPACING_SELECTOR,
  PRIMARY_TEXT_COLOR,
  SPACING_UNIT,
} from '../styles';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: ${PRIMARY_TEXT_COLOR};
  }
`;

const AppWrapper = styled.main`
  margin: 0 auto;
  width: 90%;
  max-width: 960px;
  padding: ${SPACING_UNIT * 4}em 0;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-top: ${SPACING_UNIT * 4}em;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3em;
  font-weight: normal;
`;

export function App() {
  return (
    <AppWrapper>
      <GlobalStyles />

      <Title>Find a trip</Title>

      <APIProvider>
        <Search />
      </APIProvider>
    </AppWrapper>
  );
}
