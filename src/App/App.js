import React from 'react';
import styled from 'styled-components/macro';
import { APIProvider } from '../api/APIProvider';
import { Search } from '../search/Search';

const Wrapper = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1``;

export function App() {
  return (
    <Wrapper>
      <Title>Find a trip</Title>

      <APIProvider>
        <Search />
      </APIProvider>

      {/* <AuthenticationContextProvider>
        <SearchContextProvider>
          <SearchForm />
        </SearchContextProvider>
      </AuthenticationContextProvider> */}
    </Wrapper>
  );
}
