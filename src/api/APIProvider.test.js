import { render } from '@testing-library/react';
import React from 'react';
import { APIProvider, LOCAL_STORAGE_KEY_TOKEN } from './APIProvider';
import { useAPI } from './useAPI';

/** @type {import('./apiContext').APIContextValue} */
let context = null;

function ContextConsumer() {
  context = useAPI();
  return null;
}

describe('APIProvider', () => {
  afterEach(() => {
    context = null;
  });

  it('should provide a fetchAPI function', () => {
    render(
      <APIProvider>
        <ContextConsumer />
      </APIProvider>,
    );

    expect(context).toBeDefined();
    expect(typeof context.fetchAPI).toBe('function');
  });

  it('should fetch using the existing token', async () => {
    const token = 'test-token';
    localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, token);

    // Just asserting on the reference.
    const expectedResponse = {};
    fetch.mockImplementation(() => Promise.resolve(expectedResponse));

    render(
      <APIProvider>
        <ContextConsumer />
      </APIProvider>,
    );

    const url = 'test-url';
    const options = { method: 'get', headers: { Accept: 'application/json' } };
    const response = await context.fetchAPI(url, options);

    expect(response).toBe(expectedResponse);

    expect(fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        ...options,
        headers: expect.objectContaining(options.headers),
      }),
    );

    expect(fetch.mock.calls[0][1].headers['Authorization']).toEqual(
      expect.stringContaining(token),
    );
  });

  it('should refetch a token when it has expired', async () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, 'expired-token');

    // API call with expired token.
    fetch.mockImplementationOnce(() => Promise.resolve({ status: 401 }));

    // Auth call.
    const newToken = 'test-token';
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ access_token: newToken }),
      }),
    );

    // API call with new token.
    const expectedResponse = {};
    fetch.mockImplementationOnce(() => Promise.resolve(expectedResponse));

    render(
      <APIProvider>
        <ContextConsumer />
      </APIProvider>,
    );

    const url = 'test-url';
    const options = { method: 'get', headers: { Accept: 'application/json' } };
    const response = await context.fetchAPI(url, options);

    expect(response).toBe(expectedResponse);
    expect(fetch).toHaveBeenCalledTimes(3);

    expect(fetch).toHaveBeenLastCalledWith(
      url,
      expect.objectContaining({
        ...options,
        headers: expect.objectContaining(options.headers),
      }),
    );

    expect(fetch.mock.calls[2][1].headers['Authorization']).toEqual(
      expect.stringContaining(newToken),
    );

    expect(localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN)).toEqual(newToken);
  });
});
