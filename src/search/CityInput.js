import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { SPACING_UNIT } from '../styles';

// The value corresponding to the "Select a city..." option.
const NONE_OPTION_VALUE = 'none';

// It would be better to dynamically fetch this list.
const CITIES = [
  'Paris',
  'Lyon',
  'Marseille',
  'Rennes',
  'Bordeaux',
  'Lille',
  'Nantes',
];

const Select = styled.select`
  height: 2em;
  border: 1px solid #ccc;
  border-radius: ${SPACING_UNIT / 2}em;
  background: white;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

// We use a native select here to simplify things.
// It would be better to use a custum select that let the user searches for a
// city, the list could come from an API.
export function CityInput({ value, onChange, ...rest }) {
  return (
    <Select
      {...rest}
      value={value || NONE_OPTION_VALUE}
      onChange={e => {
        onChange(e.target.value === NONE_OPTION_VALUE ? '' : e.target.value);
      }}
    >
      <option value={NONE_OPTION_VALUE}>Select a city...</option>

      {CITIES.map(city => (
        <option key={city} value={city} children={city} />
      ))}
    </Select>
  );
}

CityInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
