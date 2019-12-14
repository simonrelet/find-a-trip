import { stringify } from 'query-string';

const DEFAULT_QUERIES = {
  _format: 'json',
  locale: 'fr_FR',
  cur: 'EUR',
};

const DEFAULT_OPTIONS = {
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'fr',
    'cache-control': 'no-cache',
  },
};

export async function searchTrips({ fetchAPI, departure, destination }) {
  const query = stringify({
    ...DEFAULT_QUERIES,
    fn: departure,
    tn: destination,
  });

  const url = `${process.env.REACT_APP_TRIP_API}?${query}`;

  const result = await fetchAPI(url, DEFAULT_OPTIONS);

  if (!result.ok) {
    throw new Error(
      `Could not search trips: ${result.statusText || result.status}`,
    );
  }

  return await result.json();
}
