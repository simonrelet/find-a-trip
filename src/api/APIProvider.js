import PropTypes from 'prop-types';
import React from 'react';
import { API_CONTEXT } from './apiContext';

const TOKEN_KEY = 'token';

const AUTH_OPTIONS = {
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
  // Use a Ref instead of a state to avoid updates and to make sure the
  // references of `getToken` and `fetchAPI` never change.
  const token = React.useRef(localStorage.getItem(TOKEN_KEY));

  // Gets a new token and save it for later in the local storage.
  const getToken = React.useCallback(async () => {
    const authResult = await fetch(
      process.env.REACT_APP_AUTH_API,
      AUTH_OPTIONS,
    );

    if (!authResult.ok) {
      throw new Error(
        `Could not get token: ${authResult.statusText || authResult.status}`,
      );
    }

    token.current = (await authResult.json()).access_token;
    localStorage.setItem(TOKEN_KEY, token.current);
  }, []);

  // The fetch wrapper that adds the API token.
  const fetchAPI = React.useCallback(
    async (input, { headers = {}, ...init } = {}) => {
      // The actual API call.
      async function fetchWithToken() {
        return await fetch(input, {
          ...init,
          headers: { ...headers, Authorization: `Bearer ${token.current}` },
        });
      }

      let apiResult = null;

      // Optimistic API call with the current token.
      if (token.current != null) {
        apiResult = await fetchWithToken();
      }

      // When the token is missing or expired, we ask for a new one and retry
      // the API call.
      // We only ask for a token when we need one, i.e. when an API call is
      // made.
      if (token.current == null || apiResult.status === 401) {
        await getToken();
        apiResult = await fetchWithToken();
      }

      return apiResult;
    },
    [getToken],
  );

  const value = React.useMemo(() => ({ fetchAPI }), [fetchAPI]);

  return <API_CONTEXT.Provider value={value} children={children} />;
}

APIProvider.propTypes = {
  children: PropTypes.node,
};
