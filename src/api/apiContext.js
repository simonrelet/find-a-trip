import React from 'react';

/**
 * This context provides a fetch function that manages the API token so callers
 * don't have to.
 *
 * @typedef {object} APIContextValue
 * @property {function(RequestInfo, RequestInit): Promise<Response>} fetchAPI
 */

/** @type {React.Context<APIContextValue>} */
export const API_CONTEXT = React.createContext(null);
