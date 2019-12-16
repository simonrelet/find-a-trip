import { render } from '@testing-library/react';
import React from 'react';
import { MockAPIProvider } from './api/APIProvider/MockAPIProvider';

export function renderWithAPIProvider(
  element,
  { fetchMocks = [], ...options } = {},
) {
  const mockFetch = jest.fn();
  fetchMocks.forEach(fetchMock => {
    mockFetch.mockImplementationOnce(fetchMock);
  });

  const res = render(
    <MockAPIProvider fetchAPI={mockFetch} children={element} />,
    options,
  );

  return { ...res, mockFetch };
}
