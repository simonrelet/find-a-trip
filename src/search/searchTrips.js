import { stringify } from 'query-string';

const DEFAULT_SEARCH_QUERIES = {
  _format: 'json',
  locale: 'fr_FR',
  cur: 'EUR',
};

const DEFAULT_SEARCH_OPTIONS = {
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'fr',
    'cache-control': 'no-cache',
  },
};

export async function searchTrips({ departure, destination, fetchAPI }) {
  const query = stringify({
    ...DEFAULT_SEARCH_QUERIES,
    fn: departure,
    tn: destination,
  });

  const result = await fetchAPI(
    `${process.env.REACT_APP_TRIP_API}?${query}`,
    DEFAULT_SEARCH_OPTIONS,
  );

  if (!result.ok) {
    throw new Error(
      `Could not search trips: ${result.statusText || result.status}`,
    );
  }

  return await result.json();
}
