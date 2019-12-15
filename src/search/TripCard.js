import { format, isSameDay, parse } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { CHILDREN_SPACING_SELECTOR, SPACING_UNIT } from '../styles';
import { UserInfo } from './UserInfo';

const TODAY = new Date();

const DATE_API_FORMAT = 'dd/MM/yyyy HH:mm:ss';
const TIME_FORMAT = 'HH:mm';
const DAY_FORMAT = 'EEEE do';

const Card = styled.div`
  padding: ${SPACING_UNIT * 2}em;
  background-color: white;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.23);
  border-radius: ${SPACING_UNIT / 2}em;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-top: ${SPACING_UNIT * 2}em;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-left: ${SPACING_UNIT}em;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-left: ${SPACING_UNIT}em;
  }
`;

const DepartureDate = styled.span`
  font-size: 1.25em;
`;

const TripInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-top: ${SPACING_UNIT}em;
  }
`;

const Price = styled.span`
  font-size: 1.25em;
  font-weight: bold;
`;

export function TripCard({ trip }) {
  const departureDate = parse(trip.departure_date, DATE_API_FORMAT, TODAY);
  let formattedDepartureTime = format(departureDate, TIME_FORMAT);

  if (!isSameDay(departureDate, TODAY)) {
    const day = format(departureDate, DAY_FORMAT);
    formattedDepartureTime = `${formattedDepartureTime} - ${day}`;
  }

  return (
    <Card>
      <CardContent>
        <TripInfo>
          <DepartureDate>{formattedDepartureTime}</DepartureDate>

          <span>
            {trip.departure_place.city_name} - {trip.arrival_place.city_name}
          </span>
        </TripInfo>

        <Price>{trip.price.string_value}</Price>
      </CardContent>

      <CardFooter>
        <UserInfo user={trip.user} />

        <a href={trip.links._front} target="_blank" rel="noopener noreferrer">
          See more on BlaBlaCar
        </a>
      </CardFooter>
    </Card>
  );
}

TripCard.propTypes = {
  trip: PropTypes.object.isRequired,
};
