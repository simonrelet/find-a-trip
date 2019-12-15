import PropTypes from 'prop-types';
import React from 'react';
import { API_CONTEXT } from './apiContext';

export const LOCAL_STORAGE_KEY_TOKEN = 'token';

const AUTH_FETCH_OPTIONS = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    grant_type: 'client_credentials',
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    scopes: ['SCOPE_TRIP_DRIVER', 'DEFAULT', 'SCOPE_INTERNAL_CLIENT'],
  }),
};

export function APIProvider({ children }) {
  if (process.env.NODE_ENV !== 'production') {
    if (
      process.env.REACT_APP_CLIENT_ID == null ||
      process.env.REACT_APP_CLIENT_SECRET == null
    ) {
      throw new Error(
        'The authentication API requires a client ID and secret. Have a look at the Set up authentication keys section in the README.',
      );
    }
  }

  // Use a Ref instead of a state to avoid updates and to make sure the
  // references of `getToken` and `fetchAPI` never change.
  const token = React.useRef(localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN));

  // Gets a new token and save it for later in the local storage.
  const getToken = React.useCallback(async () => {
    const result = await fetch(
      process.env.REACT_APP_AUTH_API,
      AUTH_FETCH_OPTIONS,
    );

    if (!result.ok) {
      throw new Error(
        `Could not get token: ${result.statusText || result.status}`,
      );
    }

    token.current = (await result.json()).access_token;
    localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, token.current);
  }, []);

  // The fetch wrapper that adds the API token and update the token when needed.
  const fetchAPI = React.useCallback(
    async (input, { headers = {}, ...init } = {}) => {
      // The actual API call.
      async function fetchWithToken() {
        return await fetch(input, {
          ...init,
          headers: { ...headers, Authorization: `Bearer ${token.current}` },
        });
      }

      let result = null;

      // Optimistic API call with the current token.
      if (token.current != null) {
        result = await fetchWithToken();
      }

      // When the token is missing or expired, we ask for a new one and retry
      // the API call.
      // We only ask for a token when we need one, i.e. when an API call is
      // made.
      if (token.current == null || result.status === 401) {
        await getToken();
        result = await fetchWithToken();
      }

      return result;
    },
    [getToken],
  );

  const value = React.useMemo(() => ({ fetchAPI }), [fetchAPI]);

  return <API_CONTEXT.Provider value={value} children={children} />;
}

APIProvider.propTypes = {
  children: PropTypes.node,
};
