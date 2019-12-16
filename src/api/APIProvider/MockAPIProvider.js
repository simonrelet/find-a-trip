import React from 'react';
import { API_CONTEXT } from '../apiContext';

// Only used by tests to mock the `fetchAPI` function.
export function MockAPIProvider({ children, fetchAPI }) {
  const value = React.useMemo(() => ({ fetchAPI }), [fetchAPI]);
  return <API_CONTEXT.Provider value={value} children={children} />;
}
