import { render } from '@testing-library/react';
import React from 'react';
import { TripCard } from './TripCard';

describe('TripCard', () => {
  it('should render the given trip', () => {
    const trip = {
      departure_date: '15/12/2019 05:00:00',
      departure_place: {
        city_name: 'Paris',
      },
      arrival_place: {
        city_name: 'Lyon',
      },
      price: {
        string_value: '22 €',
      },
      user: {
        links: {
          _front: 'https://url-to-user-profile.com',
        },
        has_picture: true,
        picture: 'https://url-to-user-picture.com',
        display_name: 'John Doe',
      },
      links: {
        _front: 'https://url-to-trip.com',
      },
    };

    const { container } = render(<TripCard trip={trip} />);
    expect(container).toMatchSnapshot();
  });
});
