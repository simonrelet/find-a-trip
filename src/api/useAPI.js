import React from 'react';
import { API_CONTEXT } from './apiContext';

export function useAPI() {
  const context = React.useContext(API_CONTEXT);

  if (context == null) {
    throw new Error('useAPI cannot be used outside of an <APIProvider />');
  }

  return context;
}
