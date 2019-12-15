import React from 'react';
import { useAsyncMemo } from 'react-behave';
import styled from 'styled-components/macro';
import { useAPI } from '../api/useAPI';
import { SECONDARY_TEXT_COLOR } from '../styles';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import { searchTrips } from './searchTrips';

const Separator = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #eee;
`;

const Helper = styled.p`
  text-align: center;
  color: ${SECONDARY_TEXT_COLOR};
`;

const Placeholder = styled.p`
  color: ${SECONDARY_TEXT_COLOR};
`;

export function Search() {
  const { fetchAPI } = useAPI();

  const [departure, setDeparture] = React.useState('');
  const [destination, setDestination] = React.useState('');

  const [results, searchStatus] = useAsyncMemo(async () => {
    if (departure === '' || destination === '') {
      return null;
    }

    return await searchTrips({ departure, destination, fetchAPI });
  }, [departure, destination, fetchAPI]);

  let content = null;

  if (departure === '' || destination === '') {
    content = <Helper>Enter a departure and destination city above</Helper>;
  } else if (searchStatus.error != null) {
    content = <p>{searchStatus.error.message}</p>;
  } else if (searchStatus.pending) {
    // We sould use a nive placeholder here instead of some text.
    content = <Placeholder>Loading...</Placeholder>;
  } else if (results != null) {
    content = <SearchResults results={results} />;
  }

  return (
    <>
      <SearchForm
        departure={departure}
        setDeparture={setDeparture}
        destination={destination}
        setDestination={setDestination}
      />

      <Separator />
      {content}
    </>
  );
}
