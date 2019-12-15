import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import {
  CHILDREN_SPACING_SELECTOR,
  SECONDARY_TEXT_COLOR,
  SPACING_UNIT,
} from '../styles';
import { TripCard } from './TripCard';

const Results = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-top: ${SPACING_UNIT * 3}em;
  }
`;

const ResultsCount = styled.p`
  color: ${SECONDARY_TEXT_COLOR};
`;

export function SearchResults({ results: { pager, trips } }) {
  return (
    <section>
      <ResultsCount>Found {pager.total} results</ResultsCount>

      <Results>
        {trips.map(trip => (
          <li key={trip.permanent_id}>
            <TripCard trip={trip} />
          </li>
        ))}
      </Results>
    </section>
  );
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
};
