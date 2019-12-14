import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { spacingUnit } from '../styles';

const Card = styled.section`
  padding: ${spacingUnit * 2}em;
  background-color: white;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.23);
  border-radius: ${spacingUnit / 2}em;
  display: flex;
  align-items: center;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export function SearchForm({
  departure,
  setDeparture,
  destination,
  setDestination,
}) {
  return (
    <Card>
      <Field>
        <label htmlFor="departure">Departure</label>
        <input
          value={departure}
          onChange={e => setDeparture(e.target.value)}
          id="departure"
        />
      </Field>

      <Field>
        <label htmlFor="destination">Destination</label>
        <input
          value={destination}
          onChange={e => setDestination(e.target.value)}
          id="destination"
        />
      </Field>
    </Card>
  );
}

SearchForm.propTypes = {
  departure: PropTypes.string.isRequired,
  setDeparture: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  setDestination: PropTypes.func.isRequired,
};
