import React from 'react';
import { useAsyncCallback } from 'react-behave';
import { useAPI } from '../api/useAPI';
import { SearchForm } from './SearchForm';
import { searchTrips } from './searchTrips';

const DEBOUCED_TIME = 500;

export function Search() {
  const { fetchAPI } = useAPI();

  const [departure, setDeparture] = React.useState('paris');
  const [destination, setDestination] = React.useState('lyon');

  const [search, searchStatus] = useAsyncCallback(
    async () => await searchTrips({ fetchAPI, departure, destination }),
    [departure, destination, fetchAPI],
  );

  React.useEffect(() => {
    if (departure !== '' && destination !== '') {
      const timer = setTimeout(search, DEBOUCED_TIME);
      return () => clearTimeout(timer);
    }
  }, [departure, destination, search]);

  return (
    <>
      <SearchForm
        departure={departure}
        setDeparture={setDeparture}
        destination={destination}
        setDestination={setDestination}
      />

      {searchStatus.pending && searchStatus.value == null && <p>Loading...</p>}
      {searchStatus.error != null && <p>{searchStatus.error.message}</p>}

      {searchStatus.value != null && (
        <pre>
          <code>{JSON.stringify(searchStatus.value, null, 2)}</code>
        </pre>
      )}
    </>
  );
}
