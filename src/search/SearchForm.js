import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import {
  CHILDREN_SPACING_SELECTOR,
  SECONDARY_TEXT_COLOR,
  SPACING_UNIT,
} from '../styles';
import { CityInput } from './CityInput';

const Form = styled.section`
  display: flex;
  align-items: center;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-left: ${SPACING_UNIT * 2}em;
  }
`;

const Field = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-top: ${SPACING_UNIT}em;
  }
`;

const Label = styled.label`
  color: ${SECONDARY_TEXT_COLOR};
`;

export function SearchForm({
  departure,
  setDeparture,
  destination,
  setDestination,
}) {
  return (
    <Form>
      <Field>
        <Label htmlFor="departure">Departure</Label>
        <CityInput id="departure" value={departure} onChange={setDeparture} />
      </Field>

      <Field>
        <Label htmlFor="destination">Destination</Label>
        <CityInput
          id="destination"
          value={destination}
          onChange={setDestination}
        />
      </Field>
    </Form>
  );
}

SearchForm.propTypes = {
  departure: PropTypes.string.isRequired,
  setDeparture: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  setDestination: PropTypes.func.isRequired,
};
